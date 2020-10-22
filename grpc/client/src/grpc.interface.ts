import { Observable } from 'rxjs';

export interface IGRPCService {
  accumulate(numberArray: INumberArray): Observable<any>;
}

interface INumberArray {
  data: number[];
}
