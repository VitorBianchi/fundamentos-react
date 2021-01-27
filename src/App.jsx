import './App.css'
import React from 'react'

// Basicos
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

// Repetição
import ListaAlunos from './components/repeticao/ListaAlunos'

// Layout
import Card from './components/layout/Card'

export default () => { 
    return (
        <div className="app">

            <div className="cards">

                {/* Componente 6 - Repetição Lista */}
                <Card title="Repetição" color="#2F97C1">
                    <ListaAlunos/>
                </Card>

                {/* Componente 5 - Familia Membro */}
                <Card title="Familia" color="#2F97C1">
                    <Familia sobrenome="Bianchi">
                        <FamiliaMembro nome="Vitor"     />
                        <FamiliaMembro nome="Bete"      />
                        <FamiliaMembro nome="Larissa"   />
                    </Familia>
                </Card>

                {/* Componente 4 - Retornando número aleatório */}
                <Card title="Desafio Aleatório" color="#0CF574">
                    <Aleatorio min={0} max={10}/>
                </Card>

                {/* Componente 3 - Retornando elemento sem o nó raiz */}    
                <Card title="React Fragment" color="#15E6CD">
                    <Fragmento />
                </Card>
                
                {/* Componente 2 - Componente passando parametros */} 
                <Card title="Parametros" color="#1CCAD8">
                    <ComParametro 
                        title="Vitor" 
                        subtitle="Teste" 
                        nota={9}/>
                </Card>
                
                {/* Componente 1 - Criando o primeiro componente */}
                <Card title="Primeiro" color="#2F97C1">
                    <Primeiro />
                </Card>
            </div>
            
            
        </div>
    )
}