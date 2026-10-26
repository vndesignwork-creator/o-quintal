# Pesquisa e descoberta do Quintal

Implementação: 26 de outubro de 2026.

## Publicado

- Títulos e descrições específicos nas seis páginas, com localização e intenção de pesquisa.
- URL canónico por página, Open Graph e cartões de partilha.
- JSON-LD estático: Restaurant, WebSite, WebPage e breadcrumbs nas páginas interiores. Morada, telefone, cozinha, horários, ementa, reserva online e quatro perfis públicos. Sem avaliações, prémios, coordenadas ou preços inventados.
- Perguntas frequentes visíveis na página inicial, com informações úteis para a visita. Sem prometer resultados enriquecidos de FAQ.
- sitemap.xml com as seis páginas e a data das alterações reais.
- llms.txt como resumo complementar experimental. Não é um requisito dos assistentes nem garante indexação ou citações.

## Acesso de rastreadores

O site está num subdiretório do GitHub Pages. O ficheiro aplicável seria https://vndesignwork-creator.github.io/robots.txt; a verificação em 26/10/2026 devolveu 404, sem uma regra de exclusão. As páginas não têm noindex. Um robots.txt em /o-quintal/ não controlaria o domínio, pelo que não foi criado um ficheiro que desse essa falsa impressão.

OAI-SearchBot e Claude-SearchBot destinam-se à pesquisa. Não é necessário optar por treino de modelos para procurar visibilidade em pesquisa. Não foram alteradas políticas de treino.

## Próximos passos com o responsável do restaurante

1. Confirmar os horários, morada, telefone e preços atuais. Os horários publicados foram preservados; feriados requerem confirmação.
2. Escolher o domínio definitivo. Se este site substituir o original, configurar redirecionamentos 301 do antigo e atualizar os canónicos, sitemap, JSON-LD e llms.txt para o novo domínio. Evitar manter duas versões concorrentes.
3. Verificar a propriedade em Google Search Console e Bing Webmaster Tools e submeter https://vndesignwork-creator.github.io/o-quintal/sitemap.xml. Não foram feitas verificações de conta nem submissões sem acesso às contas.
4. Atualizar o link do site no Perfil da Empresa no Google, Bing Places e perfis públicos do restaurante quando este endereço for o definitivo. Usar os mesmos nome, morada e telefone.
5. Acompanhar indexação, consultas e cliques nas ferramentas dos motores de pesquisa. Reavaliar depois dos novos rastreios; a presença em respostas de IA varia e não é garantida.

## Manutenção

As informações Restaurant estão incluídas no HTML das seis páginas para serem lidas sem JavaScript. Alterações a horários, morada ou telefone devem ser aplicadas ao conteúdo visível, ao JSON-LD das seis páginas e ao llms.txt. Atualizar lastmod do sitemap apenas nas páginas realmente alteradas. O script de preparação em work/prepare-geo.py é uma migração de uso único; não o repetir porque duplicaria metadados.

## Referências

- https://developers.openai.com/api/docs/bots
- https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- https://developers.google.com/search/docs/appearance/structured-data/local-business
