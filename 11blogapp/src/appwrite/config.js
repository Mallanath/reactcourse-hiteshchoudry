


import conf from "../conf/conf";
import { Client, Databases,Storage, Query, ID } from "appwrite";

export class service{
    client = new client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getComputedStyle(slug){
        try {
           return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log("Appwrite service :: getPost() :: ", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
          return await  this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log("Appwrite services :: getPost() ::", error);
            return false
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite services :: createPost() ::", error);
            return false
        }
    }


    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite services :: updatePost() ::", error);
            return false
        }
    }

    async deletePost(slug){
        try {
             await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite services :: deletePost() ::", error);
            return false
        }
    }
    
    //*  Storage Services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite services :: updateFile() ::", error);
            return false
        }
    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Appwrite services :: deleteFile() ::", error);
            return false
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        ).href
    }
}

  const service  = new Service()
  export default service;

