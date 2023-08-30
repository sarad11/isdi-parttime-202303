import useAppContext from '../hooks/useAppContext'
import { useState } from 'react'
import Header from './Header.jsx'
import { Input, InputForm, Container, Button, FormButton } from '../library'
import registerEmployee from '../logic/registerEmployee'

export default function RegisterEmployeeModal({ employee, onEmployeeRegistered, onEmployeeDatabaseMenuModalLogout, onCloseRegisterEmployeeModal }) {
    console.log('EmployeeDatabaseMenu --> open')

    const { alert } = useAppContext()
    const [modal, setModal] = useState(null)


    const handleRegisterEmployee = (event) => {
        event.preventDefault()

        //  PERSONAL DATA
        const name = event.target.name.value
        const firstSurname = event.target.firstSurname.value
        const secondSurname = event.target.secondSurname.value
        // const birthDate = event.target.birthDate.value
        const idCardNumber = event.target.idCardNumber.value
        const tssNumber = (event.target.tssNumber.value).replace(/\s+/g, '')
        const address = event.target.address.value
        const personalPhoneNumber = Number((event.target.personalPhoneNumber.value).replace(/\s+/g, ''))
        const bankAccountNumber = (event.target.bankAccountNumber.value).replace(/\s+/g, '')
        const avatar = event.target.avatar.value

        //  PROFESIONAL DATA
        const employeeNumber = event.target.employeeNumber.value


        // const startOfEmploymentData = event.target.startOfEmploymentData.value
        // const endOfEmploymentData = event.target.endOfEmploymentData.value
        // const lengthOfEmployment = event.target.lengthOfEmployment.value
        const typeOfContract = event.target.typeOfContract.value
        const jobPosition = event.target.jobPosition.value
        const department = event.target.department.value
        const salaryLevel = Number(event.target.salaryLevel.value)
        const centerAttached = event.target.centerAttached.value
        const superiorHierarchicalManager = event.target.superiorHierarchicalManager.value

        //  PERMISSIONS AREA
        const roll = event.target.roll.value
        const professionalPhoneNumber = Number((event.target.professionalPhoneNumber.value).replace(/\s+/g, ''))
        const professionalEmail = event.target.professionalEmail.value
        const accessPermissions = event.target.accessPermissions.value


        try {
            registerEmployee(name,
                firstSurname,
                secondSurname,
                // birthDate,
                idCardNumber,
                tssNumber,
                address,
                personalPhoneNumber,
                bankAccountNumber,
                avatar,
                employeeNumber,
                // startOfEmploymentData,
                // endOfEmploymentData,
                // lengthOfEmployment,
                typeOfContract,
                jobPosition,
                department,
                salaryLevel,
                centerAttached,
                superiorHierarchicalManager,
                roll,
                professionalPhoneNumber,
                professionalEmail,
                accessPermissions,

            )
                .then(() => {
                    onEmployeeRegistered()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const handleCloseRegisterEmployeeModal = () => {
        setModal(null)
        onCloseRegisterEmployeeModal()
    }

    return <section className="registerEmployee">
        <div className="h-full flex  pl-4 pr-12 mt-1 space-y-4 w-full">
            <form className="" onSubmit={handleRegisterEmployee}>
                <h5>Personal data </h5>
                <div className="flex flex-wrap">
                    <div className="w-2/6">
                        <label className="placeholder:text-">Name: <Input className="placeholder:text-xs" type="text" name="name" placeholder="Name" /></label>
                    </div>
                    <div className="w-2/6">
                        <label>First surname: <Input className="placeholder:text-xs" type="text" name="firstSurname" placeholder="First Surname" /></label>
                    </div>
                    <div className="w-2/6">
                        <label>Second surname: <Input className="placeholder:text-xs" type="text" name="secondSurname" placeholder="Second Surname" /></label>
                    </div>
                    {/* <label>Birthdate: <input className="input w-1/4" type="date" name="birthDate" /></label> */}
                    <div className="w-2/6">
                        <label>Id Card number:<Input className="placeholder:text-xs" type="text" name="idCardNumber" placeholder="NNNNNNNNL" /></label>
                    </div>
                    <div className="w-2/6">
                        <label>TSS number:<Input className="placeholder:text-xs" type="text" name="tssNumber" placeholder="NN NNNNNNNN NN" /></label>
                    </div>
                    <div className="w-2/6">
                        <label>Personal phone number:<Input className="placeholder:text-xs" type="number" name="personalPhoneNumber" placeholder="NNN NN NN NN" /></label>
                    </div>
                    <div className="w-7/12">
                        <label>Bank account number:<Input className="w-full placeholder:text-xs" type="text" name="bankAccountNumber" placeholder="LLNN NNNN NNNN NNNN NNNN" /></label>
                    </div>
                    <div className="w-7/12">
                        <label>Address:<Input className="w-full placeholder:text-xs" type="text" name="address" placeholder="Street number  floor door  Postal Code City (Province) Country" /></label>
                    </div>
                    <div className="w-7/12">
                        <label>Avatar:<Input className="w-full placeholder:text-xs" type="url" name="avatar" placeholder="URL" /></label>
                    </div>
                </div>
                <h5 className="mt-7">Professional data</h5>
                <div className="flex flex-wrap">
                    <div className="w-2/6">
                        <label>Employee number:<Input className="placeholder:text-xs" type="string" name="employeeNumber" placeholder="NNNNN" /></label>
                    </div>
                    {/* <label>Start of employment data:<input className="input" type="date" name="startOfEmploymentData" /></label>
                        <label>End of employment data:<input className="input" type="date" name="endOfEmploymentData" /></label>
                    <label>Length of employment:<input className="input" type="number" name="lengthOfEmployment" /></label> */}
                    <div className="w-2/6">
                        <label>Type of contract:<Input className="placeholder:text-xs" type="text" name="typeOfContract" placeholder="Temporal / Permanent" /></label>
                    </div>
                    <div className="w-2/6">
                        <label>Salary level:<Input className="placeholder:text-xs" type="number" name="salaryLevel" placeholder="1 / 2 / 3 / 3 / 4 / 5" /></label>
                    </div>
                    <div className="w-2/6 ">
                        <label>Center attached:<Input className="placeholder:text-xs" type="text" name="centerAttached" placeholder="Barcelona / Madrid / Malaga" /></label>
                    </div>

                    <div className="w-3/6 ">
                        <label>superiorHierarchicalManager:<Input className="placeholder:text-xs" type="text" name="superiorHierarchicalManager" placeholder="id" /></label>
                    </div>

                    <div className="w-7/12">
                        <label>Department:<Input className="w-full placeholder:text-xs" type="text" name="department" placeholder="C-Suite / Development / Design / Financial / Human Resources" /></label>
                    </div>
                    <div className="w-7/12">
                        <label>Job position:<Input className="w-full placeholder:text-xs" type="text" name="jobPosition" placeholder="CEO / CFO / CTO / Executive / Manager / Developer / Financial Controller / Assistant" /></label>
                    </div>


                    <h5 className="w-3/6 mt-7">Permissions area</h5>
                    <div className="flex flex-wrap mt-2 pb-3">
                        <div className="w-2/6 ">
                            <label>Roll:<Input className="placeholder:text-xs" type="text" name="roll" placeholder="Admin / User" /></label>
                        </div>
                        <div className="w-2/6 ">
                            <label>Access permissions<Input className="placeholder:text-xs" type="text" name="accessPermissions" placeholder="Authorized / Denied" /></label>
                        </div>
                        <div className="w-2/6 ">
                            <label>Profess. phone number:<Input className="placeholder:text-xs" type="text" name="professionalPhoneNumber" placeholder="NNN NN NN NN" /></label>
                        </div>
                        <div className="w-7/12 ">
                            <label>Professional email:<Input className="w-full placeholder:text-xs" type="email" name="professionalEmail" placeholder="name.firstSurname@b-elevezsd.es" /></label>
                        </div>
                    </div >
                    <div className="w-full pt-3 flex mr-auto ml-auto sticky bottom-0 z-10 bg-slate-200">
                        <Button className="w-[45%] ml-6 mr-5 mt-4" type="submit" >Register</Button>
                        <FormButton className=" w-[20%] mr-[4%] bg-slate-500 text-xs  mt-4" onClick={handleCloseRegisterEmployeeModal}>Back</FormButton>
                    </div>
                </div>
            </form>
        </div>
    </section >
}