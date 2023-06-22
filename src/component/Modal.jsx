import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, TextInput } from '@mantine/core';

function ModalForm() {
  const [opened, { open, close }] = useDisclosure(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [track, setTrack] = useState('');
  const [packages, setPackages] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!fullname) {
      errors.fullname = 'Full Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!dob) {
      errors.dob = 'Date of Birth is required';
    }
    if (!phone) {
      errors.phone = 'Mobile Number is required';
    }
    if (!gender) {
      errors.gender = 'Gender is required';
    }
    if (!address) {
      errors.address = 'Address is required';
    }
    if (!track) {
      errors.track = 'Track is required';
    }
    if (!packages) {
      errors.packages = 'Package is required';
    }

    // Update form errors
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return;
    }
    const interns = { fullname, email, dob, phone, gender, address, track, packages };

    setIsPending(true);

    fetch('http://localhost:7000/interns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(interns)
    })
      .then(() => {
        console.log('new data added');
        setIsPending(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsPending(false);
      });
  };


  const handleReset = () => {
    setFullname('');
    setEmail('');
    setDob('');
    setPhone('');
    setGender('');
    setAddress('');
    setTrack('');
    setPackages('');
    setSubmitted(false);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={handleReset} title="Authentication" centered>
        {submitted ? (
          <div>
            <p>Thank you for your registration. Your submission has been successful!</p>
            <Button onClick={handleReset}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextInput
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              label="Full Name"
              required

            />
              <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
              label="Email"  type='email' />
                             
              <TextInput 
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              label="Date of Birth"
              required
               type='DOB' />

              <TextInput
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              required
              label="Mobile Number"  />

              <TextInput
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              label="Gender"  />
              <TextInput
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)} label="Address" />
              <TextInput 
              value={track}
              required
              onChange={(e) => setTrack(e.target.value)}label="Track" />

            <label htmlFor="Packages" className='mt-2' required>Packages</label>
            <select class="form-select mb-4" aria-label="Default select example"  required value={packages} onChange={(e) => setPackages(e.target.value)} >
                <option selected>select option</option>
                <option value="0-1 month">0-1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="4-6 months">4-6 months</option>
            </select>
              
            {isPending ? (
              <Button disabled>Submitting...</Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </form>
        )}
      </Modal>

      <Group>
        <Button onClick={open}>APPLY NOW</Button>
      </Group>
    </>
  );
}

export default ModalForm;
