"use client"

import { db } from '@/lib/firebase'
import { collection,doc,getDoc,onSnapshot } from 'firebase/firestore'
import useSWRSubsription from 'swr/subscription'

export function usePosts(){

    const {data,error}=useSWRSubsription(['posts'],([path],{next})=>{
        const ref=collection(db,path);

        const unsub=onSnapshot(ref,(snaps)=>{
            next(null,snaps.docs.map((v)=>v.data()))
        },(error)=>{
            next(error?.message)
        })
        return ()=>unsub();
    })
    
    return {
        data,
        error,
        isLoading:data===undefined?true:false,
    }
}

export const getPost=async (id)=>{
    return await getDoc(doc(db,`posts/${id}`));
}