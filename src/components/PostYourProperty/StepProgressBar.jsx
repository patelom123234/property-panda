import React, { useEffect, useState } from 'react';
import Step from './Step';
import styles from './StepProgressBar.module.css';

const stepsData = [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
];

const StepProgressBar = ({ step }) => {
  const [currentStep, setCurrentStep] = useState(1);
  console.log(step);
  // const handleStepClick = (stepId) => {
  //   setCurrentStep(stepId);
  // };

  useEffect(() => {
    console.log(step);
    setCurrentStep(step);
  }, [step]);

  return (
    <div style={{ alignSelf: 'baseline', boxSizing: 'border-box',}}>
      <p className={styles.step_heading}>Advertise Your Property in Three Simple Steps.</p>
      <div style={{ display: 'flex', bottom: '0', flexGrow: '1', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
          {stepsData.map((curStep, index) => (
            <React.Fragment key={curStep.id}>
              <Step
                id={curStep.id}
                label={curStep.label}
                // onClick={handleStepClick}
                active={curStep.id === currentStep}
                completed={curStep.id < currentStep}
              />
              {index < stepsData.length - 1 && (
                <div
                  style={{
                    width: '40px', // Adjust the width of the progress line
                    height: '2px', // Adjust the height of the progress line
                    backgroundColor: currentStep > index + 1 ? '#28A745' : '#ddd',
                    margin: '0 5px',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepProgressBar;
