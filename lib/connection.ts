import mongoose from "mongoose"

const connectionMongo = async () => {
    try{
        const { connection } = await mongoose.connect(process.env.MONGO_CONNECTION_URL!)
        /*
        connection.readyState
        0 - disconnected
        1 - connected
        2 - connecting
        3 - disconnecting
        */
        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
    }
    catch(e){
        return Promise.reject(e)
    }
}

export default connectionMongo