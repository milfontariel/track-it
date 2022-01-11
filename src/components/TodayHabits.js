import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import { Text } from "./Historico";
import ListHabits from "./ListHabits";

export default function TodayHabits() {
    const { todayHabits } = useContext(UserContext);

    if (todayHabits.length === 0) {
        return (
            <Text>
                <p>
                    Você não possui nenhum hábito para o dia de hoje.
                </p>
            </Text>
        )
    } else {
        return (
            <ListHabits></ListHabits>
        )
    }
}