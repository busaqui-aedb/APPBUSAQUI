import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { 
  ScreenInitialLogin,
  ViewStylePage,
  LogoBusaqui,
  ContainerTitle,
  ViewStyleTitle,
  Title, 
  ViewStyleSubtitle,
  Subtitle,
  ButtomSubscribe,
  ButtomSubscribeText,
  Image
} from './styled';

const Preload = (props) => {
    

    const handleSignUp = async () => {
        //CONDIÇÃO PARA INDICAR A QUAL TELA IRÁ IR
        if(!props.token) {
            //MANDAR PARA TELA DE LOGIN
            props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'Login'})
                ]
            }));
        } else {
            //MANDAR PARA TELA DE HOME
            props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'HomeDrawer'})
                ]
            }));
        }
    }

    //VERIFICA SE O USUÁRIO TEM UM TOKEN, SE SIM PÕE O TEXTO COMO "ENTRAR AGORA", SE NÃO PÕE O TEXTO COMO "CRIAR SUA CONTA"
    function HandleButtonText () {
        if (!props.token) {
            return(
                <ButtomSubscribeText>Criar sua conta</ButtomSubscribeText>
            )
        }

        else {
            return(
                <ButtomSubscribeText>Entrar agora</ButtomSubscribeText>
            )
        }
    }
    
    return (
    <ScreenInitialLogin> 
                {/* Imagem da primeira tela de login e container */}
      <Image  source={require('../../assets/Images/ImagemGraal.png')}>  
            {/* Container do conteúdo */}
            <ViewStylePage> 
            {/* Container do logo Busaqui */}

                {/* Logo transparente do Busaqui inserido na parte superior centralizada em linha */}
                <LogoBusaqui source={require('../../assets/Images/Icons/Busaqui.png')}/>


                {/* CONTAINER DO TÍTULO + SUBTÍTULO */}
                <ContainerTitle>
                
                    <ViewStyleTitle>
                    {/* Título da screen */}
                        <Title>
                            Saiba onde {'\n'}
                            seu ônibus {'\n'}
                            está agora!
                        </Title>

                    </ViewStyleTitle>
                        {/* Container do subtítulo */}
                    <ViewStyleSubtitle>
                        {/* Subtítulo centralizado em linha abaixo do título */}
                        <Subtitle>
                            Assistente de mobilidade urbana, que {'\n'}
                            mostra a localização em tempo real dos {'\n'}
                            ônibus de sua cidade.
                        </Subtitle>
                    </ViewStyleSubtitle>

                </ContainerTitle>

                    <ButtomSubscribe
                        underlayColor={'#fff4'}
                        onPress={handleSignUp} activeOpacity={0.4}>

                        {/* Texto do botão de entrar */}
                        <HandleButtonText/>

                    </ButtomSubscribe>
            </ViewStylePage>
        </Image> 
    </ScreenInitialLogin>   
    );
}

 const mapStateToProps = (state) => {
     return{
         token:state.userReducer.token
     };
 }

 export default connect(mapStateToProps)(Preload); 