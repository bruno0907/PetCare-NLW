# PetCare

## Descrição do Projeto:
Projeto prático da primeira semana #NLW by Rocketseat.
Este é um projeto prática baseado na proposta da primeira semana da Next Week Level #NWL da Rocketseat.
Partindo da proposta da equipe optei por desenvolver um layout e idéia particular mas seguindo várias propostas do projeto original.

## Tecnologias Utilizadas:
 - HTML5 e CSS3
 - Javascript
  - ArrowFunctions, API, DOM
 - Node.js
  - Express, SQLite3, Nunjucks

Entre as modificações, a de temática de reciclagem do projeto original para a de profissionais de tratamento de Pets tais como:
 
  - Pet Walkers (Passeadores)
  - Home Care (Tratadores domésticos)
  - Adestradores
  - Veterinários
  - Banho & Tosa
  - Hotel
  
Assim como o cadastro de cuidador para incluir telefone, email, facebook, instagram e a não solicitação de endereço.
 
 ## Modificações no código:
 
Alguns tratamentos de DOM via JS fiz diferente do da aula tal qual o handle do modal de pesquisa:
 
     function modalHandle(){
        const modalHandler = document.querySelectorAll("#modal-handler")
        const modal = document.querySelector("#modal")

        modalHandler.forEach(handler => {
            handler.addEventListener('click', () => {
                modal.classList.toggle('show')             
            }); 
        })
    }
    modalHandle() 
 
 
Já na parte do backend, fiz o tratamento de erro de forma dinâmica via template conforme aprendido nas aulas:
 
 
Aqui para tratamento se nenhum serviço for selecionao ao enviar o formulário.
    
        if (!req.body.serviceSelection){                       
        return res.render("create-point.html", {
            success:true,
            image: "/assets/error.svg",
            message1: "Houve um erro com o seu cadastro!!!",  
            message2: "Você precisa selecionar ao menos um serviço prestado para se cadastrar na plataforma...",
            redirect: "/create-point"  
        })  


Tratamento de erro caso haja erro na inserção no banco de dados:
 
         return res.render("create-point.html", {
            success:true,
            image: "/assets/error.svg",
            message1: "Houve um erro com o seu cadastro!!!",  
            message2: "Preencha os campos corretamente ou tente novamente mais tarde...",  
            redirect: "/create-point"  
        })


E claro tratamento da mensagem de sucesso na inserção:

        return res.render("create-point.html", {
            success:true,
            image: "/assets/success.svg",
            message1: "Cadastro Efetuado com Sucesso!!!",
            message2: "Aguarde, você será direcionado automaticamente em 2 segundos...",
            redirect: "/"
        })

## Telas demonstrativas Desktop

![Tela Home Desktop](/public/assets/desktop_home.png)

![Tela Home Desktop](/public/assets/desktop_results.png)

![Tela Home Desktop](/public/assets/desktop_cadastro.png)

## Telas demonstrativas Mobile

![Tela Home Mobile](/public/assets/mobile_home.png)

![Tela Home Mobile](/public/assets/mobile_who.png)

![Tela Home Mobile](/public/assets/mobile_cadastro.png)


## Demais telas demonstrativas

[!Erro de Cadastro Desktop](/public/assets/desktop_error.png)

[!Sucesso de Cadastro Desktop](/public/assets/desktop_success.png)

[!Tela de Search Desktop](/public/assets/desktop_search.png)

[!Tela Quem Somos Desktop](/public/assets/desktop_who.png)


[!Tela de Erro de Cadastro Mobile](/public/assets/mobile_error.png)

[!Tela de Sucesso de Cadastro Mobile](/public/assets/mobile_sucess.png)

[!Tela de Search Mobile](/public/assets/mobile_search.png)

[!Tela de Resultados Mobile](/public/assets/mobile_results.png)

