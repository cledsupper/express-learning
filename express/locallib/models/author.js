var mongoose = require('mongoose')
const { DateTime } = require('luxon')

var Schema = mongoose.Schema

var AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
    }
)

// Atributo virtual para o nome completo
AuthorSchema
.virtual('name')
.get(function() {
    return this.family_name + ', ' + this.first_name;
})

// Atributo virtual para o tempo de vida do autor
AuthorSchema
.virtual('lifespan')
.get(function() {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString()
})

// Atributo virtual para a URL do autor
AuthorSchema
.virtual('url')
.get(function() {
    return '/catalog/author/' + this._id
})

// Atributos virtuais para as datas de nascimento e morte

AuthorSchema
.virtual('date_of_birth_formatted')
.get(function() {
    return this.date_of_birth ?
        DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
        : ''
})

AuthorSchema
.virtual('date_of_death_formatted')
.get(function() {
    return this.date_of_death ?
        DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
        : ''
})

module.exports = mongoose.model('Author', AuthorSchema)