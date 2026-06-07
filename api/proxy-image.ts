export default async function handler(req: any, res: any) {
  try {
    const imageUrl = req.query.url;
    if (!imageUrl || typeof imageUrl !== "string") {
      return res.status(400).send("Falta a URL da imagem");
    }

    // Permitido qualquer domínio seguro HTTPS (imagem artística)
    if (!imageUrl.startsWith("https://") && !imageUrl.startsWith("http://")) {
      return res.status(400).send("Apenas protocolos de imagem seguros permitidos");
    }

    // Garante que a URL esteja bem formatada e limpa
    let targetUrl = imageUrl.trim();
    try {
      const parsedUrl = new URL(targetUrl);
      targetUrl = parsedUrl.toString();
    } catch (err) {
      console.warn("Erro ao fazer parse da URL no proxy-image, usando a original:", err);
    }

    // Estratégia de múltiplas tentativas de fetch para evitar bloqueios das CDNs de museus e Wikimedia
    let response: any = null;
    let success = false;

    // Tentativa 1: User-Agent Educacional limpo (Muito aceito e recomendado pelo Wikimedia Commons e APIs públicas)
    try {
      response = await fetch(targetUrl, {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)",
          "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
        }
      });
      if (response.ok) success = true;
    } catch (e) {
      console.warn("Tentativa 1 no proxy-image falhou:", e);
    }

    // Tentativa 2: User-Agent de Navegador Moderno sem o cabeçalho Referer (evidenciando hotlink control)
    if (!success) {
      try {
        response = await fetch(targetUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
          }
        });
        if (response.ok) success = true;
      } catch (e) {
        console.warn("Tentativa 2 no proxy-image falhou:", e);
      }
    }

    // Tentativa 3: Fetch nativo padrão sem qualquer cabeçalho customizado secundário
    if (!success) {
      try {
        response = await fetch(targetUrl);
        if (response.ok) success = true;
      } catch (e) {
        console.warn("Tentativa 3 no proxy-image falhou:", e);
      }
    }

    if (!success || !response) {
      console.error(`Erro: Todas as tentativas para obter imagem falharam para a URL: ${targetUrl}`);
      return res.status(502).send("Erro ao obter a imagem de todas as origens possíveis");
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400"); // Cache por 24 horas

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return res.status(200).send(buffer);
  } catch (error) {
    console.error("Erro interno no proxy-image:", error);
    return res.status(500).send("Erro interno ao buscar a imagem");
  }
}
