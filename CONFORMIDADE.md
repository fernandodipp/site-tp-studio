# Checklist de conformidade legal

Ponto de partida técnico: não substitui um parecer jurídico. Revise os textos quando o site ou a lei mudarem.

## Premissas adotadas

- O responsável é pessoa jurídica (TP Studio Labs). Razão social, CNPJ e endereço ficaram como `[PREENCHER]`.
- O site é institucional: sem venda online, formulário, login ou área de cliente.
- O contato acontece fora do site (WhatsApp e Instagram), por iniciativa do visitante.
- A hospedagem é o GitHub Pages (GitHub, Inc., EUA), que guarda os registros de acesso. A TP Studio Labs não tem acesso a eles.
- O site não é direcionado a menores de 18 anos.

## Checklist

| Requisito | Base legal | Onde está implementado | Status |
|---|---|---|---|
| Política de Privacidade em página própria | LGPD arts. 6º, VI, e 9º | `privacidade.html` | Feito, com lacunas |
| Bases legais, finalidade e retenção | LGPD art. 7º, V e IX | `privacidade.html`, seção 2 | Feito, falta definir o prazo de retenção |
| Direitos do titular e canal de atendimento | LGPD arts. 18 e 19 | `privacidade.html`, seção 5 | Feito, falta o e-mail |
| Encarregado ou canal de privacidade | LGPD art. 41 (agente de pequeno porte: Res. CD/ANPD nº 2/2022, verificar) | `privacidade.html`, seção 1 | Pendente |
| Segurança e aviso de incidentes | LGPD arts. 46 e 48 | `privacidade.html`, seção 4 | Feito |
| Transferência internacional (hospedagem nos EUA) | LGPD art. 33 | `privacidade.html`, seção 2.1 | Feito |
| Crianças e adolescentes | LGPD art. 14 | `privacidade.html`, seção 6 | Feito |
| Termos de Uso em página própria | CDC art. 6º, III; Marco Civil art. 7º | `termos.html` | Feito, com lacunas |
| Foro sem prejudicar o consumidor | CDC art. 101, I | `termos.html`, seção 9 | Falta a cidade/UF |
| Links "Privacidade" e "Termos" em todas as páginas | Boa prática / transparência | Rodapé das três páginas | Feito |
| Identificação do provedor (nome, CNPJ, endereço, e-mail) | CDC arts. 6º, III, e 31 | Rodapé das três páginas (`.footer__id`) | Pendente (dados) |
| Aviso no ponto de contato | LGPD art. 9º | Texto abaixo do botão do CTA final | Feito |
| Sem cookies e sem rastreadores | LGPD art. 7º; Guia de Cookies da ANPD (verificar) | Fontes servidas localmente em `assets/fonts/`; nenhum script de terceiro | Feito, banner dispensado |
| Política de segurança de conteúdo | Boa prática (LGPD art. 46) | `<meta http-equiv="Content-Security-Policy">` nas três páginas | Feito |
| Referrer-Policy | Boa prática | `<meta name="referrer">` nas três páginas | Feito |
| HTTPS obrigatório | LGPD art. 46 | Configuração do GitHub Pages | Pendente: marcar "Enforce HTTPS" |
| Registros de acesso por 6 meses | Marco Civil art. 15 | Guardados pelo GitHub | Ver decisão abaixo |
| Site funciona sem JavaScript | Acessibilidade | Conteúdo visível por padrão; animações e paralaxe só com JS | Feito |

## Pendências do proprietário

1. Razão social e CNPJ (rodapé, Política e Termos).
2. Endereço completo com CEP.
3. E-mail de contato e e-mail de privacidade (podem ser o mesmo).
4. Nome do encarregado de dados, ou confirmação de que a empresa é agente de pequeno porte e usará só o canal de e-mail.
5. Prazo de retenção das conversas sem contrato (sugestão: 2 anos após o último contato).
6. Cidade/UF do foro (provavelmente a da sede).
7. No GitHub: Settings → Pages → marcar **Enforce HTTPS**.

Todos os campos pendentes aparecem no site destacados em amarelo (classe `.todo`). Busque por `PREENCHER` para achá-los.

## Decisões com mais de um caminho

**Registros de acesso (Marco Civil art. 15).** Pessoa jurídica com fins econômicos deve guardar os registros de acesso por 6 meses. No GitHub Pages, quem gera e guarda esses registros é o GitHub, e o site não tem servidor próprio. Caminhos:

- Manter o GitHub Pages (atual): simples e sem custo, mas a empresa não controla nem consegue entregar os registros se houver ordem judicial. Vale confirmar com um advogado se isso basta.
- Migrar para hospedagem própria (Nginx, Netlify etc.) com logs retidos por 6 meses, sob sigilo: cumpre o art. 15 de forma direta, mas exige configurar e declarar a retenção na Política.

Anonimizar o IP é mais privado, mas pode conflitar com o art. 15.

**Cookies.** Optamos por não usar nenhuma ferramenta de terceiros (as fontes do Google passaram a ser servidas pelo próprio site), o que dispensa o banner. Se no futuro entrar Google Analytics, Meta Pixel, mapa ou vídeo incorporado, será preciso um banner com "Aceitar" e "Recusar" de mesmo destaque, sem carregar nada antes do aceite.

**Cabeçalhos de segurança.** O GitHub Pages não permite definir cabeçalhos HTTP. A CSP e a Referrer-Policy foram colocadas por `<meta>`. `frame-ancestors`, HSTS próprio e `Permissions-Policy` só ficam disponíveis com outra hospedagem.
