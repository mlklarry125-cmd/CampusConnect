"use client";
export type Application={id:string;student:string;opportunity:string;employer:string;status:string;appliedAt:string};
const APP_KEY="campusconnect_applications_v1", ROLE_KEY="campusconnect_role_v1", USER_KEY="campusconnect_user_v1";
export const defaultApplications:Application[]=[
{id:"APP-4401",student:"Thabo Mokoena",opportunity:"Junior Software Developer Intern",employer:"ABC Technologies",status:"Under Review",appliedAt:"02 Oct 2026"},
{id:"APP-4398",student:"Naledi Kgosidintsi",opportunity:"Business Systems Intern",employer:"Kalahari Digital",status:"Shortlisted",appliedAt:"30 Sep 2026"},
{id:"APP-4387",student:"Oarabile Molefe",opportunity:"Data & Reporting Intern",employer:"Enterprise Hub",status:"Approved",appliedAt:"27 Sep 2026"}];
export function readApplications():Application[]{if(typeof window==="undefined")return defaultApplications;try{return JSON.parse(localStorage.getItem(APP_KEY)||"null")||defaultApplications}catch{return defaultApplications}}
export function saveApplications(items:Application[]){localStorage.setItem(APP_KEY,JSON.stringify(items));window.dispatchEvent(new Event("campusconnect:update"))}
export function getRole(){return typeof window==="undefined"?"Coordinator":localStorage.getItem(ROLE_KEY)||"Coordinator"}
export function setRole(role:string){localStorage.setItem(ROLE_KEY,role);window.dispatchEvent(new Event("campusconnect:update"))}
export function getUser(){return typeof window==="undefined"?"":localStorage.getItem(USER_KEY)||""}
export function setUser(email:string){localStorage.setItem(USER_KEY,email);window.dispatchEvent(new Event("campusconnect:update"))}