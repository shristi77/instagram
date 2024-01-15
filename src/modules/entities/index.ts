import { Users } from '../entities/user.entity'
import { Friends } from './friend.entity';
import { Stories } from './story.entity';
import { Subjects } from './subject.entity';

const entries = [
    Users,
    Subjects,
    Friends,
    Stories
]

export default entries;

export{
    Users,
    Subjects,
    Friends,
    Stories
}