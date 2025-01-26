import React, { useState } from "react";
import ResetPswCodeModel from "./ResetPswCodeModel";
import MailVerifyModel from "./MailVerifyModel";
import FindAccountModel from "./FindAccountModel";
import EmailNotFoundodel from "./EmailNotFoundodel";
import CreateNewPswModel from "./CreateNewPswModel";
import LoginModel from "./LoginModel";
import SigninMailModel from "./SigninMailModel";
// import SigningFormModel from "./SigningFormModel";



function ModelTest() {
  const [ResetPswCodeModelisModalOpen, setResetPswCodeModelOpen] = useState(false);
  const [MailVerifyModelModalOpen, setMailVerifyModelOpen] = useState(false);
  const [FindAccountModelModalOpen, setFindAccountModelOpen] = useState(false);
  const [EmailNotFoundModelModalOpen, setEmailNotFoundModelOpen] = useState(false);
  const [CreateNewPswModelModalOpen, setCreateNewPswModelOpen] = useState(false);
  const [LoginModelisOpen, setLoginModelisOpen] = useState(false);
  const [SigninMailModelisOpen, setSigninMailModelisOpen] = useState(false);
  // const [SigningFormModelisOpen, setSigningFormModelisOpen] = useState(false);

  //model  ResetPswCodeModel
  const handlResetPswCodeModel = ()=>{
    setResetPswCodeModelOpen(!ResetPswCodeModelisModalOpen);
  }

  //model  MailVerifyModel
  const handleOpenMailVerifyModel = () => {
    setMailVerifyModelOpen(!MailVerifyModelModalOpen);
  }

  //model  FindAccountModel
  const handleFindAccountModel = () => {
    setFindAccountModelOpen(!FindAccountModelModalOpen);
  }

  //model  EmailNotFoundodel
  const handleEmailNotFoundodel = () => {
    setEmailNotFoundModelOpen(!EmailNotFoundModelModalOpen);
  }

  //model  CreateNewPswModel
  const handleCreateNewPswModel = () => {
    setCreateNewPswModelOpen(!CreateNewPswModelModalOpen);
  }

  const handleLoginModel= () => {
    setLoginModelisOpen(!LoginModelisOpen);
  }

  const handleSigningMailModel= () => {
    setSigninMailModelisOpen(!SigninMailModelisOpen);
  }

  //signing form model
  // const handleSigningFormModel= () => {
  //   setSigningFormModelisOpen(!SigningFormModelisOpen);
  // }

  //models data
  const [email,getemail] = useState("");


  return (
    <div>
      <button onClick={handlResetPswCodeModel}>ResetPswCodeModel</button>
      <ResetPswCodeModel handlResetPswCodeModel={handlResetPswCodeModel} isOpen={ResetPswCodeModelisModalOpen} />

      <br></br>
      <button onClick={handleOpenMailVerifyModel}>MailVerifyModel</button>
      <MailVerifyModel 
      handleOpenMailVerifyModel={handleOpenMailVerifyModel}
      handleSigningMailModel={handleSigningMailModel}
      isOpen={MailVerifyModelModalOpen} 
      email={email}/>

      <br></br>
      <button onClick={handleFindAccountModel}>FindAccountModel</button>
      <FindAccountModel handleFindAccountModel={handleFindAccountModel} isOpen={FindAccountModelModalOpen} />

      <br></br>
      <button onClick={handleEmailNotFoundodel}>EmailNotFoundodel</button>
      <EmailNotFoundodel handleEmailNotFoundodel={handleEmailNotFoundodel} isOpen={EmailNotFoundModelModalOpen} />

      <br></br>
      <button onClick={handleCreateNewPswModel}>CreateNewPswModel</button>
      <CreateNewPswModel handleCreateNewPswModel={handleCreateNewPswModel} isOpen={CreateNewPswModelModalOpen} />

      <br></br>
      <button onClick={handleLoginModel}>LoginModel</button>
      <LoginModel handleLoginModel={handleLoginModel} isOpen={LoginModelisOpen} />

      <br></br>
      <button onClick={handleSigningMailModel}>SigninMailModel</button>
      <SigninMailModel 
      handleSigningMailModel={handleSigningMailModel} 
      isOpen={SigninMailModelisOpen} 
      getemail={getemail}
      handleOpenMailVerifyModel={handleOpenMailVerifyModel} />

      <br></br>
      {/* <button onClick={handleSigningFormModel}>LoginForm</button>
      <SigningFormModel handleSigningFormModel={handleSigningFormModel} isOpen={SigningFormModelisOpen} /> */}
      


    </div>


    
  );
}

export default ModelTest;
