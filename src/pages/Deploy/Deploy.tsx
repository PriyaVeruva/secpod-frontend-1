import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import styles from './Deploy.module.scss';
import { useState } from 'react';
import { serverNamesData } from './data';
import { Dialog } from '@mui/material';

export default function Deploy(): JSX.Element {

  const [selectedServer, setSelectedServer] = useState(serverNamesData[0]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ProductSelectionComponent>
        <div className={styles.mainContainer}>
          <div className={styles.pageHeading}>Where do you want to deploy?</div>
          <div className={styles.subHeading}>Please select following server for deployment</div>
          <div className={styles.subContainer}>
            <div className={styles.serverContainer}>
              <div className={styles.heading}>Servers</div>
              <div className={styles.serverOptionsCont}>
                {serverNamesData?.map((name, i) => (
                  <div
                    className={`${styles.serverOptions} ${selectedServer === name && styles.active || ''}`}
                    key={i}
                    onClick={(): void => setSelectedServer(name)}>
                    {selectedServer === name ? <TaskAltSharpIcon /> : <CircleOutlinedIcon />}
                    {name}
                  </div>
                ))}
              </div>
              <div className={styles.helperText}>
                If you a have server in your mind for deploying your server please send us email to
              </div>
              <div className={styles.email}>info@secpod.com</div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.backButton}>BACK</div>
              <div className={styles.continueButton} onClick={handleClickOpen}>CONTINUE</div>
            </div>
          </div>
        </div>
      </ProductSelectionComponent>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      >
        <div className={styles.dialogueContainer}>
          <div className={styles.dialogueHeading}>
            Created Account Successfully
          </div>
          <div className={styles.dialogueSubHeading}>
            Please configure your Sannernow console
          </div>
          <div className={styles.configureButton} onClick={handleClickOpen}>CONFIGURE</div>
        </div>
      </Dialog>
    </>
  );
}
