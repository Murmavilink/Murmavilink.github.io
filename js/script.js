let arr1 = ["05-10-2022 15:00",
"12-10-2022 15:00",
"19-10-2022 15:00",
"26-10-2022 15:00",
"02-11-2022 15:00",
"09-11-2022 15:00",
"16-11-2022 15:00",
"23-11-2022 15:00",
"30-11-2022 15:00",
"07-12-2022 15:00",
"14-12-2022 15:00",
"21-12-2022 15:00",
"28-12-2022 15:00",
"04-01-2023 15:00",
"11-01-2023 15:00",
"18-01-2023 15:00",
"25-01-2023 15:00",
"01-02-2023 15:00",
"08-02-2023 15:00",
"15-02-2023 15:00",
"22-02-2023 15:00",
"01-03-2023 15:00",
"08-03-2023 15:00",
"15-03-2023 15:00",
"22-03-2023 15:00",
"29-03-2023 15:00",
"05-04-2023 15:00",
"12-04-2023 15:00",
"19-04-2023 15:00",
"26-04-2023 15:00",
"03-05-2023 15:00",
"10-05-2023 15:00",
"17-05-2023 15:00",
"24-05-2023 15:00",
"31-05-2023 15:00"];  


let arr2 = ["19-10-2022 15:00",
"26-10-2022 15:00",
"02-11-2022 15:00",
"09-11-2022 15:00",];

let res = arr1.filter(item => !arr2.includes(item));



const tabs = () => {
    const tabPanel = document.querySelector('.teacher-tabs-ul');
    const tabs = document.querySelectorAll('.teacher-tabs-ul li a');
    const tabContent = document.querySelectorAll('.teacher-part__content');
    const teacherInfoContents = document.querySelectorAll('.teacher-info');

    
    tabPanel.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target.closest('.teacher-tabs-ul li a')) {
            tabs.forEach((tab, index) => {
                const tabBtn = e.target.closest('.teacher-tabs-ul li a');

                if(tab === tabBtn) {
                    tab.classList.add('active');
                    tabContent[index].classList.add('active');
                    teacherInfoContents[index].classList.add('active');
                } else {
                    tab.classList.remove('active');
                    tabContent[index].classList.remove('active');
                    teacherInfoContents[index].classList.remove('active');
                }
            });
        }

    });

};

tabs();

const menu = () => {

    const menu = document.querySelector('.menu');
    const btnMob = document.querySelector('.mob-start');


    btnMob.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    

};

menu();