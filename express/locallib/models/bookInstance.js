var mongoose = require('mongoose')

var Schema = mongoose.Schema

var BookInstanceSchema = new Schema(
    {
        book: {type: Schema.ObjectId, ref: 'Book', required: true},
        imprint: {type: String, required: true},
        status: {type: String, required: true, enum: ['Disponível', 'Em manutenção', 'Emprestado', 'Reservado',], default: 'Em manutenção'},
        due_back: {type: Date, default: Date.now}
    }
)

// Atributo virtual para URL
BookInstanceSchema
.virtual('url')
.get(function() {
    return '/catalog/bookinstance/' + this._id
})

module.exports = mongoose.model('BookInstance', BookInstanceSchema)