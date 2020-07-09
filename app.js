var cronometro;
new Vue({
    el:'#app',
    data:{
        //v-show
        champContainer:true,
        //css
        buttonDisable:true,
        titleChampSelect:'Escolha seu campeão',
        
        //dados de campeões
        champs:'',
        champSelect:'',
        timer:10,

        // Player 1
        player1Obj:'',
        p1Hp:0,

        // Player 2
        player2Obj:'',
        p2Hp:0,
    },
    computed:{

        //Criar a lista com o nome de todos os campeões
        async setChamps(){ 
            this.champs = await getChamps();
        },

        



    },
    methods:{
        loadPlayersData(champID){
            this.champSelect=champID;
            this.player1Data();
            this.player2Data();
            this.titleChampSelect="Confirme seu campeão";
        },

        //parte do lol
        async player1Data(){
            //Habilitando o botão de confirmar
            this.buttonDisable=false;
            //Coletando os dados do campeão selecionado
            var champ = await getChampData(this.champSelect);

            //setando o obj no VUE
            this.player1Obj = champ.data[this.champSelect];

            //Setando o HP do Campeão 1
            this.p1Hp = champ.data[this.champSelect].stats.hp;
            console.log(this.player1Obj.name)            

        },

        async player2Data(){
            //Gerando Array de todos os campeões
            var champsArray = Object.keys(this.champs);

            //Gerando número randomico entre 0 - 147
            var n = Math.floor(Math.random() * ((champsArray.length-1) - 0) + 0);
            
            //Coletando os dados do campeão randomico selecionado
            var champ = await getChampData(champsArray[n]);

            //setando o obj no VUE
            this.player2Obj = champ.data[champsArray[n]];
            
            //Setando o HP do Campeão 2
            this.p2Hp = champ.data[champsArray[n]].stats.hp;
            console.log(this.player2Obj.name)            
        },
        cronometroChamp(){
            cronometro = setInterval(()=>{
                this.timer--
                if(this.timer<0){
                    //limpando o cronometro, resetando a variavel do timer, fechando o modal e deixando o container dos champs invisivel
                    this.resetarCronometro();
                    $('#modalChampSelect').modal('hide');
                    this.champContainer=false;
                }
            }, 1000);
        },
        resetarCronometro(){
            this.timer=10;
            clearInterval(cronometro);
        }
      
    },
    watch:{
        timer(depois, antes){
            console.log(`Antes = ${antes} Depois = ${depois}`);
        }

    },
})
