# O Quintal

Site estático do restaurante O Quintal, na Amadora. Páginas: Início, Menu, Sobre Nós, Galeria, Contactos e Reservas. Inclui pesquisa de pratos, 14 categorias de ementa, galeria com filtros e ampliação de fotografias, mapa e reservas por telefone.

## Formulário de reservas

O formulário em `reservas.html` usa o endpoint Formspree fornecido pelo responsável do site. Definir `data-endpoint` no elemento `reservation-form` com o endereço `https://formspree.io/f/ID` fornecido pelo painel Formspree. Sem endpoint, o envio permanece desativado e é apresentado o telefone; não existe envio simulado.

Confirmar o email de destino na conta Formspree antes de publicar. O formulário pede nome, telefone, email, data, hora, número de pessoas e observações opcionais. Valida os horários apresentados no site no fuso Europe/Lisbon. Os pedidos não confirmam disponibilidade; a equipa confirma manualmente. O envio usa POST com resposta JSON, evita cliques duplicados enquanto envia, conserva os dados em caso de erro e tem um campo honeypot.

Depois da configuração, verificar um pedido de teste identificado como tal no painel Formspree e a receção no email do restaurante.

## Publicação

O GitHub Pages publica o site a cada commit na branch `main`. Nas definições do repositório, GitHub Pages usa **Deploy from a branch**, branch **main**, pasta **/ (root)**.

O site usa HTML, CSS e JavaScript, sem dependências de instalação. Os caminhos relativos permitem a publicação num subdiretório do GitHub Pages.

## Conteúdo

As reservas abrem o contacto telefónico do restaurante. Os 105 nomes e preços da ementa foram transcritos da captura do site original fornecida pelo utilizador, tal como 30 fotografias dos pratos. Confirmar disponibilidade e preços atuais com o restaurante. Os textos de apresentação foram desenvolvidos a partir das informações conhecidas, sem acrescentar uma história ou equipa fictícias.

Fotografias do restaurante obtidas das páginas públicas:

- https://www.portugalplease.com/lisboa/amadora/onde-comer/restaurantes/restaurante-o-quintal-amadora
- https://lifecooler.com/artigo/atividades/restaurante-o-quintal/451571
