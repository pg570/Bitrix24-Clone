import React, {  useContext, useState } from 'react'
import 
{ Box, Flex, Image, Input, Text} from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

function Login() {

  const {toggle}  = useContext(AuthContext);
    const [formState, setFormState] = useState({
        name: "",
        password: ""
      });

      const navigate = useNavigate();

      function handleChange(e) {
        const { name, value } = e.target;
        setFormState({
        ...formState,
        [name]: value
        });
    }

    function handleSubmit(e) {
      e.preventDefault();
      fetch("https://damp-ravine-71862.herokuapp.com/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      })

        toggle();
        setTimeout(()=> (navigate('/')),2000 )

        
    }

    console.log(formState)
  return (
    <div>
      {/* <Text fontSize='6xl'><b>Login</b></Text> */}
      
      <Box style={{display:'flex'}}>
        <Box bg='blue.300' p={4} w='40%' h='100vh'>
          
          <Flex alignItems='center' justifyContent='space-between'>

            <Image mt={10} ml={10} src='https://www.bitrix24.net/bitrix/templates/new/images/bitrix24-logo-en.svg' />
            
            <Link to='/'>
                <Text mr={20} color='white' fontSize='lg'>
                  <i class="fa-solid fa-arrow-left"></i>   Back to site
                </Text>
            </Link> 
          </Flex>

        <Text 
        fontSize='6xl' 
        color='white' 
        align='left'
        mt={40}
        ml={10}
        lineHeight='1.2'
        >Your Company United.</Text>
        
        <Text
        fontSize='2xl'
        color='white'
        mt={5}
        ml={10}
        align='left'
        >Free. Unlimited. Online.</Text>

        </Box>


        <Box w='60%'>
          <Text
          fontSize='4xl'
          mt={20}
          ml={20}
          align='left'
          ><b>Bitrix24 Login</b></Text>
          
            <hr style={{ width:'80%', margin:'auto', marginTop:'20px' }}></hr>
            <hr style={{ width:'80%', margin:'auto' }}></hr>
            <hr style={{ width:'80%', margin:'auto' }}></hr>

            <Box w='70%' mt={5} ml={20} bg='#BDF00B3D' p={5}>
              <Text align='left' fontSize={18} >Please log on using your login and password (or use social login) to enter www.bitrix24.in.</Text>
            </Box>
           

          <Box mt={10} ml={20}>

            <form onSubmit={handleSubmit}>
                <Flex direction='column' gap='30px' alignItems='left'>

                    <Input 
                    placeholder='Enter Name'
                    width='400px'
                    value={formState.name}
                    onChange={handleChange}
                    name='name'
                    type='text'
                    />

                    <Input 
                    placeholder='Enter Password'
                    width='400px'
                    value={formState.password}
                    onChange={handleChange}
                    name='password'
                    type='password'
                    />
                    
                    <Input 
                    type='submit'
                    width='200px'
                    bg='blue.300' color='white'/>
                </Flex>
            </form>
          </Box>

          <Flex
          justifyContent='center' alignItems='center' mt={5}
          ><hr style={{ width:'40%', margin:'auto'}}></hr>or<hr style={{ width:'40%', margin:'auto' }}></hr></Flex>
        
          Log in / Sign up with

          <Box bg="grey.500" mt={10}>
            <Flex gap={5} justifyContent='center'>
                <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=751257608227496&kid_directed_site=0&app_id=751257608227496&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D751257608227496%26redirect_uri%3Dhttps%253A%252F%252Fwww.bitrix24.net%252Fbitrix%252Ftools%252Foauth%252Ffacebook.php%26scope%3Demail%26display%3Dpopup%26state%3Dsite_id%253Ds1%2526backurl%253D%25252Foauth%25252Fauthorize%25252F%25253Fcheck_key%25253D6c07ac728ad3ab6f91d89d97b4401bd6%252526user_lang%25253Den%252526client_id%25253Dsite.5602b8e8a41202.94213120%252526redirect_uri%25253Dhttps%2525253A%2525252F%2525252Fwww.bitrix24.in%2525252Fauth%2525252F%2525253Fauth_service_id%2525253DBitrix24Net%252526scope%25253Dauth%2525252Cclient%252526response_type%25253Dcode%252526mode%25253Dpage%252526state%25253Dsite_id%2525253Din%25252526backurl%2525253D%252525252Fauth%252525252F%252525253Fcheck_key%252525253Dffc5b1c0f07bc6501edf78c13fef61e3%25252526mode%2525253Dpage%2526redirect_url%253D%25252Foauth%25252Fauthorize%25252F%25253Fuser_lang%25253Den%252526client_id%25253Dsite.5602b8e8a41202.94213120%252526redirect_uri%25253Dhttps%2525253A%2525252F%2525252Fwww.bitrix24.in%2525252Fauth%2525252F%2525253Fauth_service_id%2525253DBitrix24Net%252526scope%25253Dauth%2525252Cclient%252526response_type%25253Dcode%252526mode%25253Dpage%252526state%25253Dsite_id%2525253Din%25252526backurl%2525253D%252525252Fauth%252525252F%252525253Fcheck_key%252525253Dffc5b1c0f07bc6501edf78c13fef61e3%25252526mode%2525253Dpage%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dbb769fa2-94e6-4a0f-9205-2c29322ea850%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.bitrix24.net%2Fbitrix%2Ftools%2Foauth%2Ffacebook.php%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dsite_id%253Ds1%2526backurl%253D%25252Foauth%25252Fauthorize%25252F%25253Fcheck_key%25253D6c07ac728ad3ab6f91d89d97b4401bd6%252526user_lang%25253Den%252526client_id%25253Dsite.5602b8e8a41202.94213120%252526redirect_uri%25253Dhttps%2525253A%2525252F%2525252Fwww.bitrix24.in%2525252Fauth%2525252F%2525253Fauth_service_id%2525253DBitrix24Net%252526scope%25253Dauth%2525252Cclient%252526response_type%25253Dcode%252526mode%25253Dpage%252526state%25253Dsite_id%2525253Din%25252526backurl%2525253D%252525252Fauth%252525252F%252525253Fcheck_key%252525253Dffc5b1c0f07bc6501edf78c13fef61e3%25252526mode%2525253Dpage%2526redirect_url%253D%25252Foauth%25252Fauthorize%25252F%25253Fuser_lang%25253Den%252526client_id%25253Dsite.5602b8e8a41202.94213120%252526redirect_uri%25253Dhttps%2525253A%2525252F%2525252Fwww.bitrix24.in%2525252Fauth%2525252F%2525253Fauth_service_id%2525253DBitrix24Net%252526scope%25253Dauth%2525252Cclient%252526response_type%25253Dcode%252526mode%25253Dpage%252526state%25253Dsite_id%2525253Din%25252526backurl%2525253D%252525252Fauth%252525252F%252525253Fcheck_key%252525253Dffc5b1c0f07bc6501edf78c13fef61e3%25252526mode%2525253Dpage%23_%3D_&display=popup&locale=en_GB&pl_dbl=0'><i class="fa-brands fa-facebook fa-2x"></i></a>
                <a href='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'><i class="fa-brands fa-google fa-2x"></i></a>
                <a href='https://appleid.apple.com/sign-in'><i class="fa-brands fa-apple fa-2x"></i></a>
                <a href='https://account.live.com/tou/accrue?mkt=EN-US&uiflavor=web&id=292666&ru=https://login.live.com/login.srf%3fid%3d292666%26opid%3d1549FE57E9208A27%26opidt%3d1661442539'><i class="fa-brands fa-microsoft fa-2x"></i></a>
                <a href='https://twitter.com/'><i class="fa-brands fa-square-twitter fa-2x"></i></a>
                <a href='https://zoom.us/signin'><i class="fa-solid fa-video fa-2x"></i></a>
            </Flex>
          </Box>

        <Text color='gray' fontSize='xl' mt={10}>FORGOT PASSWORD ? </Text>

        </Box>

      </Box>


    </div>
  )
}

export default Login