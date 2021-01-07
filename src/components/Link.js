import React, {useEffect, useState} from 'react'
import FormLinks from './FormLinks'
import {db} from '../firebase'

function Link(){

    const addData = async(linkObject) => {
       await db.collection("links").doc().set(linkObject)
    }

    return(
        <FormLinks {...{ addData}}/>
    )
}

export default Link

