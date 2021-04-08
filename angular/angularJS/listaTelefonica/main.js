let app = angular.module('listaTelefonica', [])
app.controller('listaController', function ($scope) {
    $scope.titulo = "Lista Telefônica"
    // Array
    $scope.contatos = [{ nome: "Alex", telefone: 124441234, operadora: "claro" },
    { nome: "Ana", telefone: 123451234, servico: "claro" }]

    $scope.operadoras = [
        { servico: "OI", codigo: 14, categoria: "Celular" },
        { servico: "VIVO", codigo: 15, categoria: "Celular" },
        { servico: "TIM", codigo: 41, categoria: "Celular" },
    ]
    //Array, incluir contatos
    $scope.adicionarContatos = function (contato) {
        $scope.contatos.push(angular.copy(contato))
        delete $scope.contato
        $scope.contatoForm.$setPristine()
    }

    $scope.deletarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato
        })
    }

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado
        })
    }

    $scope.ordenarPor = function (campo) {
        $scope.ordernarSelcetion = campo
        $scope.doubleInvert = !$scope.doubleInvert

    }
})

/*
    $scope.operadoras=[
        {servico: "OI", codigo:14,categoria:"Celular"},
        {servico: "VIVO", codigo:15,categoria:"Celular"},
        {servico: "TIM", codigo:41,categoria:"Celular"},
        {servico: "GVT", codigo:25,categoria:"Fixo"},
        {servico:"Embratel", codigo: 21, categoria:"Fixo"}
    ]

    fazer matricula de alunos
*/