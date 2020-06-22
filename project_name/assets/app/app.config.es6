Vue.use(bootstrapVue)
Vue.use(Resource)
Vue.use(User)

Vue.component('validation-provider', VeeValidate.ValidationProvider)
Vue.component('validation-observer', VeeValidate.ValidationObserver)

VeeValidate.extend('required', {
    ...VeeValidate.Rules['required'],
    message: 'Este campo é requerido'
})

VeeValidate.extend('min-value', {
    ...VeeValidate.Rules['min_value'],
    message: 'Campo deve possuir valor igual ou maior que {min}'
})

VeeValidate.extend('numeric', {
    ...VeeValidate.Rules['numeric'],
    message: 'Apenas valores numéricos são permitidos'
})

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
