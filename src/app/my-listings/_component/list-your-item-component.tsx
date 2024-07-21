"use client"
import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button';
import ItemName from './item-name';

const totalSteps = 5;
const stepIncrement = 100 / totalSteps;

function ListYourItemComponent() {

  const [step, setStep] = useState(1);

  const handleNextStepChange = () => {
    if ( step === totalSteps ) return

    setStep( currentStep => currentStep + 1 )
  }

  const handlePreviousStepChange = () => {
    if ( step === 1 ) return

    setStep ( currentStep => currentStep - 1)
  }

  const handleFinalSubmit = () => {

  }

  const handleListAnother = () => {
    setStep(1);
  }

  return (
    <>
        <h1 className='text-2xl sm:text-4xl text-center py-8 font-bold'>List your item</h1>
        <div className="space-y-8">
            <Progress value={step * stepIncrement}/>
            <ItemName onNext={handleNextStepChange}/>
        </div>
    </>
  )
}

export default ListYourItemComponent;