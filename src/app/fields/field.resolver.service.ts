import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Field} from "./field.model";
import {FieldsService} from "./fields.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FieldResolverService implements Resolve<Field> {
  constructor(private fieldService: FieldsService) {
  }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.fieldService.fetchFields();
  }
}
