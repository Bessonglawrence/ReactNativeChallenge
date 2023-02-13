import React from 'react';
import { 
    View, 
    Text, 
    TextInput,
    Image, 
    TouchableOpacity, 
    Alert,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './FlickerRentStyle';
import { ScrollView } from 'react-native-gesture-handler';

const FlickerRent = (navigation) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={"#4c97ea"} barStyle={"light-content"} />
            <LinearGradient 
                colors={['#68a7ed', '#4c97ea']} 
                style={styles.linearGradient}
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                locations={[0.6,1]}
            >
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => Alert.alert('Back button has been pressed')} >
                        <Icon name='arrow-back-circle' size={35} color='lightgrey' />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        RENT FLICKER
                    </Text>
                </View>

                <View  style={styles.searchView}>
                    <Icon name="search" color="lightgrey" size={35} style={styles.searchIcon}/>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search ..."
                        underlineColorAndroid='transparent'
                    />
                </View>
            </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: 20}}>
                <Text style={styles.categoryHeader}>
                    Our Categories
                </Text>
                <View style={styles.categoryCard}>
                    <View style={{flexDirection: 'row', marginBottom: 4}}>
                        <TouchableOpacity>
                            <Image 
                                source={require('../../../../res/Images/appliances.png')}
                                style={styles.categoryCardImage}
                            />
                            <Text style={styles.categoryCardText}>
                                Appliances
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginHorizontal: 30}}>
                            <Image 
                                source={require('../../../../res/Images/bed.png')}
                                style={styles.categoryCardImage}
                            />
                            <Text style={styles.categoryCardText}>
                                Bedrooms
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../../../../res/Images/warehouse.png')}
                                style={styles.categoryCardImage}
                            />
                            <Text style={styles.categoryCardText}>
                                Storage
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 4}}>
                        <TouchableOpacity >
                            <Image 
                                source={require('../../../../res/Images/video.png')}
                                style={styles.categoryCardImage}
                            />
                            <Text style={styles.categoryCardText}>
                                Coverage
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginHorizontal: 30}}>
                            <Image 
                                source={require('../../../../res/Images/sofa.png')}
                                style={styles.categoryCardImage}
                            />
                            <Text style={styles.categoryCardText}>
                                LivingRoom
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image 
                                source={require('../../../../res/Images/services.png')}
                                style={styles.categoryCardImage}
                            />
                            <Text style={styles.categoryCardText}>
                                Service
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <Text style={styles.trendingProductsHeader}>
                    Trending Products
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft: 17}}>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('../../../../res/Images/Canon-EOS.jpg')}
                            style={styles.trendingProductsImage}
                        />
                        <Text style={styles.trendingProductsText}>
                            Canon EOS
                        </Text>
                        <Text style={styles.trendingProductPrice}>
                            XAF50,000/Month
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('../../../../res/Images/guitar.jpg')}
                            style={styles.trendingProductsImage}
                        />
                        <Text style={styles.trendingProductsText}>
                            Ibanez guitar
                        </Text>
                        <Text style={styles.trendingProductPrice}>
                            XAF2,000/day
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('../../../../res/Images/DJ.jpg')}
                            style={styles.trendingProductsImage}
                        />
                        <Text style={styles.trendingProductsText}>
                            DJ Set
                        </Text>
                        <Text style={styles.trendingProductPrice}>
                            XAF60,000/day
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('../../../../res/Images/warehouse.jpeg')}
                            style={styles.trendingProductsImage}
                        />
                        <Text style={styles.trendingProductsText}>
                            warehouse
                        </Text>
                        <Text style={styles.trendingProductPrice}>
                            XAF200,000/Month
                        </Text>
                    </View>
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={require('../../../../res/Images/car.jpeg')}
                            style={styles.trendingProductsImage}
                        />
                        <Text style={styles.trendingProductsText}>
                            Sports Car
                        </Text>
                        <Text style={styles.trendingProductPrice}>
                            XAF2,000/Month
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{marginTop: 20, marginBottom: 30}}>
                <Text style={styles.recentViewHeader}>
                    Recently Viewed Products
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10, marginLeft: 19}}>
                    <Image
                        source={require('../../../../res/Images/DJ.jpg')} 
                        style={styles.recentViewImage}
                    />
                    <Image
                        source={require('../../../../res/Images/car.jpeg')} 
                        style={styles.recentViewImage}
                    />
                    <Image
                        source={require('../../../../res/Images/warehouse.jpeg')} 
                        style={styles.recentViewImage}
                    />
                    <Image
                        source={require('../../../../res/Images/Canon-EOS.jpg')} 
                        style={styles.recentViewImage}
                    />
                    <Image
                        source={require('../../../../res/Images/nature.jpeg')} 
                        style={styles.recentViewImage}
                    />
                </ScrollView>
            </View>
            </ScrollView>
        </View>
    );
}

export default FlickerRent;