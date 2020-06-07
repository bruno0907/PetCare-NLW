const ufSelect = document.querySelector("[name=uf]") 
const citySelect = document.querySelector("[name=city]")
const stateInput = document.querySelector("[name=state]")

// CONEXÃO COM API PRA PREENCHER O CAMPO DE ESTADOS
function getUFs(){      
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }        
    })
}
getUFs()

// CONEXÃO COM A API PARA PREENCHER O CAMPO DAS CIDADES BASEADO NO ESTADO SELECIONADO 
function getCities(event){
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
        
    citySelect.disabled = true   

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        for (const city of cities) {                        
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`            
        }
        citySelect.disabled = false
    })
}

// RESPONSÁVEL POR OUVIR MUDANÇAS NO SELECT DE ESTADOS, HABILITAR O SELECT DE CIDADES E POPULÁ-LO
ufSelect.addEventListener('change', getCities)

    
// ÁREA DE SERVIÇOS    
const services = document.querySelectorAll(".services li")

for (const service of services){
    service.addEventListener('click', handleSelectedService)
}

const serviceSelection = document.querySelector("[name=serviceSelection]")

let selectedServices = []

function handleSelectedService(event){
    const serviceLi = event.target
    const dataService = event.target.dataset.service

    serviceLi.classList.toggle('selected')

    const alreadySelected = selectedServices.findIndex( 
        item => item === dataService        
    )

    if (alreadySelected >= 0) {
        const filteredServices = selectedServices.filter( item => {
            const itemIsDifferent = item != dataService
            return itemIsDifferent
        })
        selectedServices = filteredServices 
    } else {        
        selectedServices.push("\x20"+dataService)
    }    
    serviceSelection.value = selectedServices    
}