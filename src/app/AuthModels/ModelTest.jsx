import React, { useState } from "react";
import ResetPswCodeModel from "./ResetPswCodeModel";
import MailVerifyModel from "./MailVerifyModel";
import FindAccountModel from "./FindAccountModel";
import EmailNotFoundodel from "./EmailNotFoundodel";
import CreateNewPswModel from "./CreateNewPswModel";

function ModelTest() {
  const [ResetPswCodeModelisModalOpen, setResetPswCodeModelOpen] = useState(false);
  const [MailVerifyModelModalOpen, setMailVerifyModelOpen] = useState(false);
  const [FindAccountModelModalOpen, setFindAccountModelOpen] = useState(false);
  const [EmailNotFoundModelModalOpen, setEmailNotFoundModelOpen] = useState(false);
  const [CreateNewPswModelModalOpen, setCreateNewPswModelOpen] = useState(false);

  //model  ResetPswCodeModel
  const handleOpenResetPswCodeModel = () => setResetPswCodeModelOpen(true);
  const handleCloseResetPswCodeModel = () => setResetPswCodeModelOpen(false);

  //model  MailVerifyModel
  const handleOpenMailVerifyModel = () => setMailVerifyModelOpen(true);
  const handleCloseMailVerifyModel = () => setMailVerifyModelOpen(false);

  //model  FindAccountModel
  const handleFindAccountModel = () => setFindAccountModelOpen(true);
  const handleCloseFindAccountModel = () => setFindAccountModelOpen(false);

  //model  EmailNotFoundodel
  const handleEmailNotFoundodel = () => setEmailNotFoundModelOpen(true);
  const handleCloseEmailNotFoundodel = () => setEmailNotFoundModelOpen(false);

  //model  CreateNewPswModel
  const handleCreateNewPswModel = () => setCreateNewPswModelOpen(true);
  const handleCloseCreateNewPswModel = () =>setCreateNewPswModelOpen(false);
  return (
    <div>
      <button onClick={handleOpenResetPswCodeModel}>ResetPswCodeModel</button>
      <ResetPswCodeModel isOpen={ResetPswCodeModelisModalOpen} onClose={handleCloseResetPswCodeModel} />

      <br></br>
      <button onClick={handleOpenMailVerifyModel}>MailVerifyModel</button>
      <MailVerifyModel isOpen={MailVerifyModelModalOpen} onClose={handleCloseMailVerifyModel} />

      <br></br>
      <button onClick={handleFindAccountModel}>FindAccountModel</button>
      <FindAccountModel isOpen={FindAccountModelModalOpen} onClose={handleCloseFindAccountModel} />

      <br></br>
      <button onClick={handleEmailNotFoundodel}>EmailNotFoundodel</button>
      <EmailNotFoundodel isOpen={EmailNotFoundModelModalOpen} onClose={handleCloseEmailNotFoundodel} />

      <br></br>
      <button onClick={handleCreateNewPswModel}>CreateNewPswModel</button>
      <CreateNewPswModel isOpen={CreateNewPswModelModalOpen} onClose={handleCloseCreateNewPswModel} />

    </div>


    
  );
}

export default ModelTest;
