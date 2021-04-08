let app = angular.module('myMatricula', [])
app.controller('controleMatriculados', function($scope){
    $scope.titulo="Alunos Matriculados"
    
    $scope.alunos =[
        {matricula:1, nome:'ana', nota:10.00},
        {matricula:2, nome:'Flavio', nota:9.2}
]
    $scope.cadAluno = aluno => {
        $scope.alunos.push(aluno)
        delete $scope.aluno
    }
   

    $scope.delAluno = alunos =>{
        $scope.alunos = alunos.filter(aluno =>{
            if(!aluno.selecionado) return aluno
        })
    }
    
    $scope.isSelecionado = alunos =>
        alunos.some(aluno => aluno.selecionado)

})