# Projeto_Integrador_Senac_Web1

## Landing Page - Escritório de Advocacia

:busts_in_silhouette:**INTEGRANTES** <br/>
- `Gladson Vinícios`<br/>
- `Tatiana Hollanda`<br/>
- `Nickson Kleyton`<br/>
- `Paulo Victor`<br/>
- `Gabriel Carvalho`<br/>
- `Luan Augusto`<br/>
- `Ana Diva`<br/><br/>

:memo:**DESCRIÇÃO DA PROPOSTA** <br/>
&emsp;Muitas pessoas enfrentam **dúvidas sobre seus direitos trabalhistas**, mas não sabem exatamanete quando procurar um advogado ou quais medidas podem tomar. Além disso, há uma **dificuldade de acesso a informações jurídicas claras e confiáveis**, pois o conteúdo disponível muitas vezes utiliza linguagem técnica ou não oferece uma forma simples de contato com um profissional. <br/>
&emsp;Dessa forma, identifica-se a necessidade de uma **plataforma digital que apresente informações acessíveis e permita um contato rápido com um advogado especializado**.
<br/>
<br/>
:dart:**PÚBLICO-ALVO** <br/>
&emsp;O público alvo da landing page é composto por **pessoas que necessitam de orientação jurídica**, especialmente nas áreas de **direito trabalhista**, como trabalhadores que enfrentam problemas relacionados ao vínculo empregatício, rescisão de contrato, horas extras não pagas, assédio no ambiente de trabalho ou demissão sem o pagamento correto dos direitos. <br/><br/>
&emsp;Esse público geralmente apresenta as seguintes características: 
* **Faixa etária:** Entre 25 e 60 anos.
* **Perfil:** Trabalhadores formais ou informais que buscam esclarecimento sobre seus direitos.
* **Comportamento digital:** Utilizam a internet e mecanismos de busca para encontrar informações jurídicas e profissionais especializados.
* **Necessidade principal:** Compreender seus direitos e obter orientação jurídica confiável. 
<br/>

:computer:*API ESCOLHIDA* <br/>
&emsp;A API escolhida foi a *News API*, é uma API simples e em formato JSON que permite aos desenvolvedores pesquisar, rastrear e recuperar artigos e manchetes ao vivo de milhares de fontes de notícias e blogs em toda a web.<br/><br/>

&emsp;As informações principais que o projeto consumirá:<br/>
* *URL da imagem do artigo*
* *Titulo do artigo*
* *Descrição com máximo de 100 caracteres*
* *Link do artigo*<br/><br/>

&emsp;As informações estão organizadas em formato de *CARDS*, mostrando as 9 primeiras notícias relacionadas ao mundo do direito.<br/>

&emsp;Para consumir as informações especificas sobre direito, é necessário inserir palavras chaves no endpoint da API. As palavras chaves são: 
* Direito
* Advogado
* Direito trabalhista<br/><br/>

&emsp;Outras informações são importantes estar no endpoint, como:
* *Linguagem* - Definir a lingua portugues BR: language=pt
* *Quantidade de páginas* - Limitar o número de resultados para não ter excesso de informação na landing page : pageSize=9
* *A chave da API* - Chave que permite acessarmos essas informações da API.<br/>

*Endpoint completo*:https://newsapi.org/v2/everything?q=direito+OR+advogado+OR+direito+trabalhista&language=pt&sortBy=publishedAt&pageSize=9&apiKey=${chaveAPI};<br/><br/>

:date:**PLANEJAMENTO DAS TAREFAS** <br/>
&emsp;O desenvolvimento da Landing Page, voltada para a área da advocacia trabalhista, será realizado ao longo de quatro semanas. Com divisão de tarefas entre os seis integrantes da equipe, visando garantir organização, qualidade e cumprimento dos prazos estabelecidos.
<br/>
<br/>
&emsp;A equipe foi organizada de forma estratégica, considerando diferentes responsabilidades dentro do projeto:
<br/>
* **`Gladson` e `Ana`:** Responsáveis pela criação do repositório no GitHub e pela elaboração do wireframe da página, definindo a estrutura visual inicial da Landing Page, assim como a criação e públicação do site.<br/>
* **`Tatiana`:** Responsável pela organização do projeto, incluindo a distribuição das funções entre os integrantes, definição da proposta do projeto, identificação do público-alvo e levantamento das necessidades a serem atendidas pela aplicação.<br/>
* **`Nickson`, `Paulo` e `Gabriel`:** Responsáveis pela escolha da API pública a ser utilizada, bem como pela configuração inicial e testes de integração com a aplicação.<br/>
* **`Luan`:** Responsável por apoiar na elaboração do wireframe e na elaboração e documentação do README do projeto.<br/><br/>
**Lading Page:** https://queroadv.netlify.app/
## Estrutura prevista da Landing Page:
Página Inicial do site:
![Imagem da tela de início.](/assets/pg1.png)<br/><br/>
Página explicando sobre a empresa:
![Imagem da tela de sobre.](/assets/pg2.png)<br/><br/>
Página sobre a atuação da empresa:
![Imagem da tela de atuação.](/assets/pg3.png)
Página mostrando a tragetória da empresa em dados.
![Imagem da tela de dados](/assets/pg4.png)
Página de contato com um botão que leva ao whatsapp para atendimento.
![Imagem da tela de dados](/assets/pg5.png)
