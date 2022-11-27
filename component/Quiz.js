import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'

export default function Quiz({ navigation }) {
    const [quation, setQuation] = useState('')
    const [qnumber, setQnumber] = useState(0)
    const [loding, setLoding] = useState(true)
    const [option, setOption] = useState([])
    const [score, setScore] = useState(0)
    const rondemA = (array) => {
        for (let i = array.lenth - 1; i > 0; i++) {
            let j = MAth.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }
    }
    const nextQ = () => {
        setQnumber(qnumber + 1)
        setOption(gernatrandomoption(quation[qnumber+1]))
    }
    const testR = () => {
        navigation.navigate('Result', {score})
        console.log(score)
    }
    const getQuiz = async () => {
        const uri = 'https://opentdb.com/api.php?amount=10&encode=url3986'
        const res = await fetch(uri)
        const data = await res.json()
        setQuation(data.results)
        setOption(data.results)
        setLoding(false)
        setOption(gernatrandomoption(data.results[0]))
    }
    const gernatrandomoption = (_queation) => {
        const option = [..._queation.incorrect_answers]
        option.push(_queation.correct_answer)
        rondemA(option)
        return option
    }
    const chooseRight = (_option) => {
        _option === quation[qnumber].correct_answer ? (setScore(score + 10)) : setScore(score - 5);
        qnumber < 9 ? nextQ() : testR()
    }
    const showResult = () => {
        
    }
    useEffect(() => {
        getQuiz()
    }, [])
    return (
        <View style={Styles.container}>
            {loding ? <ActivityIndicator size={35} color="red" /> : (
                <View style={Styles.wapper}>
                    <View style={Styles.top} >
                        <Text style={Styles.hadding}>QUIZ</Text>
                    </View>
                    <View style={Styles.qus} >
                        <Text style={Styles.text}>Q{qnumber + 1}. {decodeURIComponent(quation[qnumber].question)}</Text>
                    </View>
                    <View style={Styles.option}>
                        <TouchableOpacity onPress={() => {chooseRight(option[0]) }} style={[Styles.qus, Styles.Otext]}  >
                            <Text style={Styles.text}>{decodeURIComponent(option[0])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {chooseRight(option[1]) }} style={[Styles.qus, Styles.Otext]} >
                            <Text style={Styles.text}>{decodeURIComponent(option[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {chooseRight(option[2]) }} style={[Styles.qus, Styles.Otext]} >
                            <Text style={Styles.text}>{decodeURIComponent(option[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {chooseRight(option[3]) }} style={[Styles.qus, Styles.Otext]}  >
                            <Text style={Styles.text}>{decodeURIComponent(option[3])}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.choies} >
                        <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Home')} >
                            <Text style={Styles.btext} >SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.button} onPress={qnumber < 9 ? nextQ : testR} >
                            <Text style={Styles.btext} >NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
             )} 
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(100,200,300)',
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 12,
        height: '100%',
    },
    wapper: {
        height: '100%'
    },
    text: {
        fontSize: 20,
    },
    Otext: {
        marginVertical: 5,
    },
    qus: {
        backgroundColor: 'rgb(159,249,253)',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
    hadding: {
        fontSize: 30,
        fontWeight: '900',

    },
    option: {
        marginVertical: 16,
        flex: 1,
    },
    choies: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'red',
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    btext: {
        fontWeight: '800',
        fontSize: 20
    }
})
