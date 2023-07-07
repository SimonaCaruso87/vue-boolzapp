const { createApp } = Vue ;

createApp({
    data(){
        return{
            contactActive : 6 ,
            newMessage : "" ,
            reserchText : "" ,
            contacts: [
                {
                    name: 'Pietro',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
                },
                {
                    name: 'Luca',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Fra Bon',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fra Di Corpo',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Michela',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luigi',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Luigi, hai novità?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    }
                    ],
                },
                {
                    name: 'Alessio',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Avevo scritto male lenght , per questo non funzionava',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Lo sai quante volte ci sbatterai la testa?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Tantissime!',
                    status: 'received'
                    }
                ],
                },
                {
                    name: 'Alessandro',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                    }
                ],
                },
                {
                    name: 'Martina',
                    avatar: './img/avatar_9.jpg',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao mamma , posso uscire con carlotta?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ti accompagno da nessuna parte!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'PErche :( ?',
                    status: 'received'
                    }
                ],
                },
            ]
        }
    },
    methods:{
      clicked(index){
         this.contactActive = index
    },
      newMessages(){
        this.contacts[this.contactActive].messages.push(
            {
                date: '10/01/2020 15:51:00',
                message:this.newMessage ,
                status: 'sent'
            }
        )

        this.newMessage= "" 

        setTimeout(() => {
            this.contacts[this.contactActive].messages.push(
                {
                    date: '10/01/2020 15:51:00',
                    message:'Ok',
                    status: 'received'
                }
            )
    
        }, 1000);
      },
        reserchT(){
           for (let index = 0; index < this.contacts.length; index++) {

            const element = this.contacts[index].name;
            const elementSmall = element.toLowerCase();

            this.contacts[index].visible = true
            if(!elementSmall.includes(this.reserchText)){
                this.contacts[index].visible = false
            }
           } 
        }

    }
}).mount('#app');
