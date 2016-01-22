$(function () {
    var factoryID = $("meta[name='factory']").attr("content");

    var animation = {
        new1: {
            animation:[
                {text:'Hello worker! Welcome back! How your little vacation?', linkText:'Good!'},
                {text:'Fantastic! Here is some news for you:'},
                {text:'Our factory was upgraded! Finally we have electricity!'},
                {text:'So from now on you have full access to wire!'},
                {text:'I hope you are as excited as I am!'},
                {text:'OK. Another news: On last weekend I received letter from headquarter. Long story short, we have to fire someone.'},
                {text:'Now! Here is difficult question:'},
                {text:'Do I have fire you or your colleague who have sick children?'},
            ],
            decisions:[
                {text:'Fire me. He needs that work more that I. ', link: 'factory_nowork_d.html'},
                {text:'Fire him!', link: 'factory_rep1.html'},
            ]
        },
        rep2: {
            animation:[
                {text:'[speaker] Worker #3812 please visit HR room!', linkText:'It\'s me! I have to go!'},
                {text:'Hello! Please have a sit.', linkText:'[sit]'},
                {text:'Once again we have to fire someone, and we want to hear your opinion who have to be next.'},
            ],
            decisions:[
                {text:'Fire me.', link: 'factory_nowork_d.html'},
                {text:'Fire someone else!', link: 'factory_rep2.html'},
            ]
        },
        nowork: {
            animation:[
                {text:'Honey! You have to get a job!', linkText:'Don\'t yelling on me!'},
            ],
            decisions:[
                {text:'Stay in home', link: 'factory_nowork_d.html'},
                {text:'Hire in your old job', link: 'factory_rep3.html'},
                {text:'Find new job', link: 'factory_new1.html'},
            ]
        }
    };

    var intro = new IntroAnimation('#screen', animation[factoryID]);
});
