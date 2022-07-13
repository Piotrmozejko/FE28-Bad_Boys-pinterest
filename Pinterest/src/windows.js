let pictureWrap = document.querySelector('.picture-list');
let pictureBtn = document.querySelectorAll('.picture-button');
let choiceMenu = document.querySelector('#choiceMenu');
let reportWindow = document.querySelector('#reportWindow');
let addWindow = document.querySelector('#addWindow');
let bodyElem = document.querySelector('body');
let dialogElems = document.querySelectorAll('dialog');

{
   // event на родителя ul, который вызовет окно
   pictureWrap.addEventListener('click', (event) => {
      let target = event.target;
      pictureBtn.forEach(() => {
         if (target.classList.value === 'picture-button') {
            choiceMenu.show();
            reportWindow.close() || addWindow.close();
         }
      });
   });
}
{
   //event внутри модального окна
   dialogElems.forEach((value) => {
      value.addEventListener('click', (event) => {
         let target = event.target;
         if (target.classList.value === 'choice_menu_btn_add') {
            choiceMenu.close();
            addWindow.show();
         }
         if (target.classList.value === 'choice_menu_btn_report') {
            choiceMenu.close();
            reportWindow.showModal();
         }
         if (target.classList.value === 'report_btn_cancel') {
            reportWindow.close();
         }

         if (target.classList.value === add_button_board) {
            addWindow.close();
         }
      });
   });
}

{
   // event на кпоку ESC, чтобы окна по нажатию закрывались
   bodyElem.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
         choiceMenu.close() || addWindow.close() || reportWindow.close();
      }
   });
}
