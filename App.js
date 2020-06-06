import React, {useState, useRef} from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App() {
  const carouselRef = useRef(null);
  const [lista, setLista] = useState([
    {
        title:"The Punisher",
        text: "After the murder of his family, Frank Castle is traumatized and being hunted. In the criminal underworld, he will become the one known as The Punisher",
        release: 2018,
        img: 'http://jrrealsolutions.co.uk/uploads/punisher.jpg'
    },
    {
        title:"Bad Boys for life",
        text: "Third episode of the stories of police officers Burnett (Martin Lawrence) and Lowrey (Will Smith), who must find and arrest the most dangerous drug dealers in the city.",
        release: 2020,
        img: 'http://jrrealsolutions.co.uk/uploads/badboy.jpg'
    },
    {
        title:"Black Widow",
        text: "In Black Widow, after her birth, Natasha Romanoff (Scarlett Johansson) is given to the KGB, which prepares her to become her definitive agent.",
        release: 2020,
        img: 'http://jrrealsolutions.co.uk/uploads/blackwidow.jpg'
    },
    {
        title:"Top Gun: MAVERICK",
        text: "In Top Gun: Maverick, after more than 30 years of service as one of the leading aviators in the Navy, the old-fashioned pilot Maverick (Tom Cruise) faces drones and proves that the human factor is still fundamental in the contemporary world of technological wars.",
        release: 2020,
        img: 'http://jrrealsolutions.co.uk/uploads/topgun.jpeg'
    },
    {
        title:"BloodShot",
        text: "Bloodshot is a former soldier with special powers: that of regeneration and the ability to metamorphose. ",
        release: 2020,
        img: 'http://jrrealsolutions.co.uk/uploads/blood.jpg'
    },
    {
        title:"Free Guy",
        text: "A bank teller stuck in a boring routine has his life turned upside down when he discovers he's a character in a brutally realistic open-world video game.",
        release: 2020,
        img: 'http://jrrealsolutions.co.uk/uploads/freeguy.jpg'
    },
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image 
            source={{uri: item.img}}
            style={styles.carouselImg} 
          />
          <Icon name="play-circle-outline" size={30} color="#FFF" style={styles.carouselIcon} />
        </TouchableOpacity>

      </View>
    )
  };
  return (
    <ScrollView style={styles.container} >
      <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground 
            source={{ uri: background}}
            style={styles.imgBg}
            blurRadius={6}
          >
            <View style={styles.viewSearch} >
              <TextInput 
                style={styles.input}
                placeholder="Looking for film ?"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>

            </View>
            <Text
              style={{color: '#fff', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginVertical: 10,}}>
                Just Arrived
              </Text>

              <View style={styles.slideView}>
                <Carousel
                  style={styles.carousel}
                  ref={carouselRef}
                  data={lista}
                  renderItem={_renderItem}
                  sliderWidth={screenWidth}
                  itemWidth={200}
                  inactiveSlideOpacity={0.5}
                  onSnapToItem={ (index) => {
                    setBackground(lista[index].img);
                    setActiveIndex(index);
                  }}
                />

              </View>
              <View style={styles.moreInfo}>
                <View style={{marginTop: 10}}>
                  <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                  <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
                </View>
                <TouchableOpacity style={{ marginRight: 15, marginTop: 10}}>
                  <Icon 
                    name="queue" 
                    color="#ea0505" 
                    size={30} 
                  />
                </TouchableOpacity>
              </View>
          </ImageBackground>


        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  imgBg:{
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000',
  },
  viewSearch:{
    marginTop: 50,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input:{
    width: '95%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon:{
    position: 'absolute',
    right: 20,
    top: 10,
  },
  slideView:{
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel:{
    flex: 1,
    overflow: 'visible',
  },
  carouselImg:{
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  carouselIcon:{
    position: 'absolute',
    top: 20,
    right: 10,
  },
  moreInfo:{
    backgroundColor: '#FFF',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold',
  },
});