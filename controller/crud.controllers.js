const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body)
        
        return res.status(201).send(item)
    } catch (err) {
        return res.status(500).send({ message: err.message})
    }
}



const deleteOne = (model) => async (req, res) => {
    try {
        const iteem = await model.findByIdAndDelete(req.params.id).lean().exec()

        return res.status(200).send(iteem)
    } catch (err) {
        return res.status(500).send({ message: err.message})
    }

}

module.exports = () =>{
    return {
        post: post(model),
        deleteOne
    }
}