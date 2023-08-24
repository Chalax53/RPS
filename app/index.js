import React from 'react';
import { Stack, Button, Text } from "@react-native-material/core";
import useSeleccion from './useSeleccion';

const Home = () => {
    const { matchWinner, matchOutcome, NPC, draws, wins, loses, reset } = useSeleccion(' ');

    return (
        <Stack>
            <Stack direction="row" center='true'>
            {/* Player chooses Piedra*/}
                <Button title="Piedra" uppercase={false} onPress={() => {
                    console.log('1.Piedra chosen')
                    matchOutcome(0);
                }}/>
            {/* Player chooses Papel*/}
                <Button title="Papel" uppercase={false} onPress={() => {
                    console.log('1.Papel Chosen')
                    matchOutcome(1);
                }}/>
            {/* Player chooses Tijera*/}
            <Button title="Papel" uppercase={false} onPress={() => {
                    console.log('1.Papel Chosen')
                    matchOutcome(2);
            }}/>        
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
    )

}

export default Home;