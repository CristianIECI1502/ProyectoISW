import React, { useState } from 'react'
import {getIdPost} from '../../data/post'

export const getServerSideProps= async(context)=>{
    const response = await getIdPost(context.query.depost)
    return {
        props:{
            data:response.data
        }
    }
}
const com = ({data}) => {
  useState
  return (
    <div>com</div>
  )

}

export default com