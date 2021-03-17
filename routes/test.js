const express = require ('express');
const router = express.Router();
const Hotel = require ('../models/hotelDetails')


router.get('/', (req, res) =>{
    res.render('test', {title : 'TotalBooking Test Page'})
})


/* .populate({
    path : "rateslist",
    populate: {
        path: "dailyrates",
        model : "Calendar"
    }
})


ProjectMetadata.findOne({id:req.params.prjId})
.populate({
    path:'tasks',
    model:'task_metadata',
    populate:{
        path:'assigned_to',
        model:'users',
        select:'name employee_id -_id' // to select fields and remove _id field

    }
})
.populate({
    path:'client',
    model:'client'
})
.populate({
    path:'prjct_mgr',
    model:'users'
})
.populate({
    path:'acc_exec',
    model:'users'
})
.populate({
    path:'prj_type',
    model:'project_type'
}).then ( // .. your thing

    ProjectMetadata.findOne({id:req.params.prjId})
    .populate(
        [{
        path:'tasks',
        model:TaskMetadata,
        populate:[{
            path:'assigned_to',
            model:User,
            select:'name employee_id'
        },
        {
            path:'priority',
            model:Priority,
            select:'id title'
        }],
        select:"task_name id code assign_to stage priority_id"
    },
    {
        path:'client',
        model:Client,
        select:"client_name"
    },
    {
        path:'prjct_mgr',
        model:User,
        select:"name"
    },
    {
        path:'acc_exec',
        model:User,
        select:'name employee_id'
    },
    {
        path:'poc',
        model:User,
        select:'name employee_id'
    },
    {
        path:'prj_type',
        model:ProjectType,
        select:"type -_id"
    }

])
*********
.populate({
    path: 'pathName',
    populate: [
        {
            path: 'FirstSubPathName',
            model: 'CorrespondingModel',
        },
        {
            path: 'OtherSubPathName',
            model: 'CorrespondingModel',
        },
        {
            path: 'AnotherSubPathName',
            model: 'CorrespondingModel',
        },
    ]
}); */








/* router.get('/', (req, res) => {
    try {
        const hotels = await Hotel.find().lean()
        res.render('test', {title : 'TotalBooking Test Page',
        hotels
    })
        
    } catch (err) {
        console.log(err);
        res.render('error')
    }
}) // end function router get






router.get('/dashboard', ensureAuth, async(req, res)=>{
    try {                                                                   //STEP 49 leggi sopra => STEP 50 creo una cartella error in views e creo i files 500 e 404.hbs
        const stories = await Story.find({user: req.user.id}).lean()
        res.render ('dashboard', {  // STEP 44 isolo la variabile nome => STEP 45 in views/dashboard.hbs invio messaggio personalizzato
            name : req.user.firstName,
            stories
        })
    } catch (err) {
        console.error(err)
        //STEP 52 renderizzo pagina di errore 500.hbs => STEP 53 creo il view template delle stories in dashboard.hbs
        res.render('error/500')
    }
   
    
})


 */
module.exports = router;