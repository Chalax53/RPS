import React from 'react';
import { Stack, Button, Text } from "@react-native-material/core";
import {Image, TouchableOpacity} from 'react-native';
import useSeleccion from './useSeleccion';
import rockIcon from './images/rock.png';
import paperIcon from './images/paper.png';
import scissorIcon from './images/scissor.png';
import bStyles from './styles.js'

const Home = () => {
    const { matchWinner, matchOutcome, NPC, draws, wins, loses, reset } = useSeleccion(' ');

    return (
        <Stack alignItems="center" justifyContent="center" flex={1}>
            <Stack direction="row">
            {/* Player chooses Piedra*/}
                <TouchableOpacity onPress={() => matchOutcome(0)} style={bStyles.iconButtons}>
                    <Image source={rockIcon} style={bStyles.bIcons} />
                </TouchableOpacity>

            {/* Player chooses Papel*/}
            <TouchableOpacity onPress={() => matchOutcome(1)} style={bStyles.iconButtons}>
                    <Image source={paperIcon} style={bStyles.bIcons} />
                </TouchableOpacity>

            {/* Player chooses Tijera*/}
            <TouchableOpacity onPress={() => matchOutcome(2)} style={bStyles.iconButtons}>
                    <Image source={scissorIcon} style={bStyles.bIcons} />
                </TouchableOpacity>       
            </Stack>

            <Stack direction="column">
                <Text>NPC Chose: {NPC}</Text>
            </Stack>

            <Stack direction="column">
                <Text>Match winner: {matchWinner} </Text>
                <Text>Wins: {wins}</Text>
                <Text>Loses: {loses}</Text>c
                <Text>Draws: {draws} </Text>
            </Stack>

            <Stack direction='row' center='true'>
            <Button title="Reset" uppercase={false} onPress={() => {
                    console.log('resetting stats...')
                    reset();
            }}/>
            </Stack>

        </Stack>
    );

}

export default Home;