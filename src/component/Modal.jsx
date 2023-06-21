import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, ScrollArea, TextInput } from '@mantine/core';

function MdodalForm() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Registration"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <div>
          <h5 className='text-center'>Registration</h5>
              <TextInput label="Full Name*" />
              <TextInput label="EMAIL*" type='email' />
              <TextInput label="Date of Birth*" type='dob' />
              <TextInput label="Mobile Number*"  />
              <TextInput label="Gender*"  />
              <TextInput label="Address*" />
              <TextInput label="Track*" />
              <TextInput label="Package*" />

              <button className='btn bg-primary text-light mt-2'>Submit</button>

          </div> 
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}




export default MdodalForm