const app=require("./server"),port=process.env.PORT;app.listen(process.env.PORT,(()=>console.log(`Express departed from port ${port}`)));
