import React, { useState, useEffect } from 'react';

const mockConfigJSON = "{\"metadata\":{\"title\":\"Performance management wayfinder\"},\"slides\":[{\"index\":0,\"type\":\"prompt\",\"components\":{\"primaryText\":\"Do you have an employee who is consistently performing below the bar for their role?\",\"buttonList\":[{\"label\":\"Yes\",\"toIndex\":2},{\"label\":\"No\",\"toIndex\":1}]}},{\"index\":1,\"type\":\"result\",\"components\":{\"primaryText\":\"Use this page to learn more about coaching your employees and deciding which performance management actions to take.\",\"resources\":[{\"label\":\"Coaching @ Amazon\",\"href\":\"https://knet.amazon.com/?%252fDeepLink%252fProcessRedirect.aspx%253fmodule%253dloRegisterAndLaunch%2526lo%253d884c3240-f360-47a5-b326-bc318207f24d\"}]}},{\"index\":2,\"type\":\"prompt\",\"components\":{\"primaryText\":\"Has the employee revealed any medical or personal issues that might affect this employee’s performance?\",\"secondaryText\":\"Note: Do not ask your employee if they have any medical or personal issues.\",\"buttonList\":[{\"label\":\"Yes\",\"toIndex\":3},{\"label\":\"No\",\"toIndex\":4}]}},{\"index\":3,\"type\":\"result\",\"components\":{\"primaryText\":\"Contact local HR to discuss next steps.\",\"secondaryText\":\"Some employee disclosures put Amazon on notice for potential accommodations. You should consult with HR before taking any further performance management actions. HR can help you decide if the employee needs a reasonable accommodation.\",\"resources\":[{\"label\":\"Leave of Absence and Accommodation information (Inside Amazon)\",\"href\":\"https://inside.amazon.com/en/Employment/USBenefits/LOAA/LeaveTypes/Pages/default.aspx\"},{\"label\":\"Employee Assistance Program information (Inside Amazon)\",\"href\":\"https://inside.amazon.com/en/Employment/USBenefits/eap/pages/default.aspx\"}]}},{\"index\":4,\"type\":\"prompt\",\"components\":{\"primaryText\":\"Alright. Do you understand the factors influencing this employee’s underperformance?\",\"buttonList\":[{\"label\":\"Yes\",\"toIndex\":6},{\"label\":\"No\",\"toIndex\":5}]}},{\"index\":5,\"type\":\"result\",\"components\":{\"primaryText\":\"You might need more information before moving on.\",\"secondaryText\":\"Understanding the potential underlying causes for underperformance is critical.\",\"resources\":[{\"label\":\"Coaching Curriculum (KNET)\",\"href\":\"https://knet.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=edd7523d-ad91-4e1b-92a6-5a87b05ea55d#t=1\"}]}},{\"index\":6,\"type\":\"prompt\",\"components\":{\"primaryText\":\"Ok, catch me up: What have you done so far?\",\"buttonList\":[{\"label\":\"Ok\",\"toIndex\":7}]}},{\"index\":7,\"type\":\"prompt\",\"components\":{\"primaryText\":\"Are they being tracked in Focus?\",\"buttonList\":[{\"label\":\"Yes\",\"toIndex\":9},{\"label\":\"No\",\"toIndex\":8}]}},{\"index\":8,\"type\":\"result\",\"components\":{\"primaryText\":\"It looks like your employee may be a candidate for Focus.\",\"secondaryText\":\"Consult the What is Focus? page for more info. You may also need to begin documenting your coaching and feedback sessions. For more info and for your org's policies on how to use Focus, consult with your HRBP.\",\"resources\":[{\"label\":\"What is Focus?\",\"href\":\"https://ivy-help-center.talent.a2z.com/article/article-1572629647344-UqODIyqHN\"}]}},{\"index\":9,\"components\":{\"primaryText\":\"And have they shown sustained progress?\",\"buttonList\":[{\"label\":\"Yes\",\"toIndex\":10},{\"label\":\"No\",\"toIndex\":11}]}},{\"index\":10,\"type\":\"result\",\"components\":{\"primaryText\":\"It looks like your employee may be a candidate for Focus.\",\"secondaryText\":\"Consult the What is Focus? page for more info. You may also need to begin documenting your coaching and feedback sessions. For more info and for your org's policies on how to use Focus, consult with your HRBP.\",\"resources\":[{\"label\":\"What is Focus?\",\"href\":\"https://ivy-help-center.talent.a2z.com/article/article-1572629647344-UqODIyqHN\"}]}},{\"index\":11,\"type\":\"result\",\"components\":{\"primaryText\":\"It looks like your employee may be a candidate for Focus.\",\"secondaryText\":\"Consult the What is Focus? page for more info. You may also need to begin documenting your coaching and feedback sessions. For more info and for your org's policies on how to use Focus, consult with your HRBP.\",\"resources\":[{\"label\":\"What is Focus?\",\"href\":\"https://ivy-help-center.talent.a2z.com/article/article-1572629647344-UqODIyqHN\"}]}}]}";

const EditForm = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [slides, setSlides] = useState({});
    const [focusSlide, setFocusSlide] = useState(null);

    useEffect(() => {
        setSlides(JSON.parse(mockConfigJSON).slides);
    }, []);
    
    const toggleShowPreview = () => setShowPreview(!showPreview);

    const updateFocusSlide = (e) => {
        const focusSlideCopy = Object.assign({}, focusSlide);
        focusSlideCopy.components[e.target.name] = e.target.value;
        setFocusSlide(focusSlideCopy);
    }

    const updateConfig = () => {
        const updatedSlides = slides
            .filter(slide => slide.index !== focusSlide.index)
            .concat(focusSlide)
            .sort((a, b) => a.index > b.index ? 1 : -1);
        setSlides(updatedSlides);
    }

    return (
        <div className="edit">
            <div className="edit-controls">
                <button onClick={toggleShowPreview}>{showPreview ? 'Hide' : 'Show'} preview</button>
                <button onClick={() => setFocusSlide(Object.assign({}, slides[5]))}>Edit slide 0</button>
            </div>
            {focusSlide &&
                <div className="edit-form">
                    {focusSlide.components.primaryText &&
                        <textarea
                            name="primaryText"
                            value={focusSlide.components.primaryText}
                            onChange={updateFocusSlide}
                        />
                    }
                    {focusSlide.components.secondaryText &&
                        <textarea
                            name="secondaryText"
                            value={focusSlide.components.secondaryText}
                            onChange={updateFocusSlide}
                        />
                    }
                    <button onClick={updateConfig}>Save slide</button>
                </div>
            }
            {showPreview && 
                <div className="edit-preview">
                    <div>
                        Edit preview
                    </div>

                </div>
            }
        </div>
    )
}

export default EditForm;