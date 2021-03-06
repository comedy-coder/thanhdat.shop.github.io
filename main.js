const registerBtn = document.getElementById('btn-resigter');
const registerElement = document.querySelector('.auth-form__register')
const resignElement = document.querySelector('.auth-form__resign');
const resignBtn= document.getElementById('btn-resign')
const closetabBtn = document.querySelector('.close-tab')
const closetabresign = document.querySelector('.close-tab-resign')
const switchResign = document.querySelector('.auth-form__btn-swtich')
const switchRegister = document.querySelector('.auth-form__btn-swtichs')
const overModal = document.querySelector('.modal__overlay')
const controlBack = document.querySelectorAll('.auth-form__controls-back')
const modalBack = document.querySelector('.modal__overlay')
const cartBtn  = document.querySelector('.header__cart-wrap')
const cartlistElement =document.querySelector('.header__cart-list')
var isClick = false    ;
console.log(cartBtn);
// registerbtn
 function handlerRegister()
 {
     
    
     modal.classList.add('acitve-modal')
     registerElement.classList.add('auth-form-register')

 }
 const modal = document.querySelector('.modal')
registerBtn.onclick = handlerRegister;
 
//resignbtn
function handlerResign()
 {
     modal.classList.add('acitve-modal')
     resignElement.classList.add('auth-form-resign')

 }
resignBtn.onclick = handlerResign;
//closetab
function handlerClose()
{
    modal.classList.remove('acitve-modal')
    registerElement.classList.remove('auth-form-register')
}
closetabBtn.onclick = handlerClose;

function handlerCloseresign()
{
    modal.classList.remove('acitve-modal')
    resignElement.classList.remove('auth-form-resign')
}
closetabresign.onclick = handlerCloseresign;
//btn-switch
function handlerSwitchresign()
{
    
    registerElement.classList.remove('auth-form-register')
    resignElement.classList.add('auth-form-resign')

}
switchResign.onclick = handlerSwitchresign;
function handlerSwitchresigter()
{
    resignElement.classList.remove('auth-form-resign')
    registerElement.classList.add('auth-form-register')

}
switchRegister.onclick = handlerSwitchresigter
function handlerBackbtn ()
{
    modal.classList.remove('acitve-modal')
    registerElement.classList.remove('auth-form-register')
    resignElement.classList.remove('auth-form-resign')
}
overModal.onclick = handlerBackbtn;
controlBack.forEach(function(rule) {

    rule.onclick = handlerBackbtn;
})
;

// cart Btn
    cartBtn.onclick = function () {
    
    isClick= !isClick;
    cartlistElement.classList.toggle("active-cart-list", isClick);
     };


// Validator
function Validator(options) 
    {  
        // L???y element c???a form c???n validat??d
        function getParents(element, selector)
        {       
            while(element.parentElement)
            {
                if(element.parentElement.matches(selector))
                {
                    return element.parentElement;
                }
                element = element.parentElement;
               
            }
          
      }
        var selectorRules = {};
       
         // H??m th???c hi???n validate
        function validate(inputElement, rule){
                var errorMessage;
                var errorElement = getParents(inputElement, options.formGruopSelector).querySelector(options.errorSelector);
                var rules = selectorRules[rule.selector]
          
             // l???y ra t???ng rule c???a selectors
             for ( var i=0 ;i < rules.length ;++i){
             switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
                    break;
                    default:
                     errorMessage = rules[i](inputElement.value);
                    
                    }
                       if(errorMessage)
                           break;
                    }
            // N???u c?? l???i d???ng vi???c ki???m tra
                        if (errorMessage)
                        {  
                           errorElement.innerText= errorMessage;
                            getParents(inputElement, options.formGruopSelector).querySelector(rule.selector).classList.add('invalid');
                                                                          
                        }
                        else
                        {   errorElement.innerText = ''
                             getParents(inputElement, options.formGruopSelector).querySelector(rule.selector).classList.remove('invalid');
                        }
                          return !errorMessage;
     }
    
         
        var formElement = document.querySelector(options.form);
        if(formElement)
        {   
                formElement.onsubmit = function(e){
                    e.preventDefault();
                    var isFormValid = true
                    //l???p qua t???ng rule v?? validate
                    options.rules.forEach(function(rule){
                        var inputElement = formElement.querySelector(rule.selector);
                        validate(inputElement, rule);
                        var isValid = validate(inputElement, rule);
                        if(!isValid){
                            isFormValid = false;
                        }
                        });
                    if(isFormValid){
                        if(typeof options.onsubmit === 'function')
                        {   var enableInputs = formElement.querySelectorAll('[name]');
                        var formValues = Array.from(enableInputs).reduce(function(values,input){
                            switch(input.type)
                            {
                                case 'radio':
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                   break;
                                    case 'checkbox':
                                        if(!input.matches(':checked')) return values;
                                        if(!Array.isArray(values[input.name])){
                                            values[input.name] = [];
                                        }
                                        values[input.name].push(input.value);
                                        break;
                                        default:
                                            values[input.name] = input.value;
                                        }
                                        returnValue = values ;
                                
                                        return values;
                                        
                                    },{});
                                    options.onsubmit(formValues);
                                }
                             }
                        }


                                    
                                    
                        if (formElement){
                           options.rules.forEach(function(rule)
                            
                            {    // l??u l???i c??c rules cho m???i input
                          
                             if(Array.isArray(selectorRules[rule.selector]))
                              {
                                  selectorRules[rule.selector].push(rule.test) ; //l??u key v?? value c???a rule v??o m???ng trong t??nh hu???ng ???? c?? m???t value trong array
                                  //push th??m m???t rule array ???? c?? v??o object
                              }
                              else
                              {   selectorRules[rule.selector] =[rule.test]; // l??u key v?? value c???a rule v??o m??ng trong t??nh hu???ng m???ng tr???ng ( ch??a c?? gi?? tr???)
                            }
                
                               var inputElements = formElement.querySelectorAll(rule.selector);
                               
                               Array.from(inputElements).forEach(function(inputElement) {
                                inputElement.onblur = function()
                                   {
                                       
                                    validate(inputElement, rule);
                                   }
                                   // X??? l?? m???i khi ng?????i d??ng  nh???p v??o input
                                     inputElement.oninput = function (){
                                    var errorElement = getParents(inputElement, options.formGruopSelector).querySelector('.form-message');
                                    errorElement.innerText = '';
                                    getParents(inputElement, options.formGruopSelector).querySelector(rule.selector).classList.remove('invalid');
                                    }
                               })
                
                            
                
                           });
                           
                            
                        }
                    
                    }
                    }
                            
                           
                            
        
                        
                       
      

            // x??? l?? l???p qua m???i rule(l???ng nghe s??? ki???n blur, input)
       // l???y element c???a form c???n validate

    
Validator.isRequired = function(selector,message){
        return {
   selector : selector,
    test : function (value){
            return value ? undefined : 'Vui l??ng nh???p tr?????ng n??y'
    }
        }



};
Validator.isEmail = function(selector,message){
    return {
        selector: selector,
        test: function (value){
            // X??? l?? tr?????ng h???p blur kh???i input
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Tr?????ng n??y ph???i l?? email';
            
        }

}
};
Validator.minLength = function(selector, min ,message){
    return {
        selector: selector,
        test: function (value){
            return value.length >= min  ? undefined : `Vui l??ng nh???p t???i thi???u ${min} k?? t???`
            
        }
        

}
};
Validator.isConfirmed = function(selector , passwordconfirmation,message ) {
    return{
        selector: selector,
        test: function (value){
            return value === passwordconfirmation () ? undefined : message || 'Gi?? tr??? nh???p v??o kh??ng ????ng'
        }
    }}
