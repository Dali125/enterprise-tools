import clientPromise from "mongodb";

export default async   (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.Db("sample_mflix");

       const movies = await db
           .collection("movies")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};