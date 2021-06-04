import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { merge, of, Subscription } from 'rxjs';

import { SbbDatepicker } from '../datepicker/datepicker';

@Component({
  selector: 'sbb-datepicker-toggle',
  templateUrl: './datepicker-toggle.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sbb-datepicker-toggle',
    '[class.sbb-datepicker-toggle-active]': 'this._datepicker && this._datepicker.opened',
    '[attr.tabindex]': 'null',
  },
})
export class SbbDatepickerToggle<D> implements OnDestroy, OnChanges, AfterContentInit {
  private _stateChanges = Subscription.EMPTY;

  /** Tabindex for the toggle. */
  @Input() tabIndex: number | null;

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled === undefined ? this._datepicker.disabled : this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled?: boolean;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public _datepicker: SbbDatepicker<D>,
    @Attribute('tabindex') defaultTabIndex: string
  ) {
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.datepicker) {
      this._watchStateChanges();
    }
  }

  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }

  ngAfterContentInit() {
    this._watchStateChanges();
  }

  /** Open datepicker calendar. */
  open(event: Event): void {
    if (this._datepicker && !this.disabled) {
      this._datepicker.open();
      event.stopPropagation();
    }
  }

  private _watchStateChanges() {
    const datepickerDisabled = this._datepicker ? this._datepicker.disabledChange : of();
    const inputDisabled =
      this._datepicker && this._datepicker.datepickerInput
        ? this._datepicker.datepickerInput.disabledChange
        : of();
    const datepickerToggled = this._datepicker
      ? merge(this._datepicker.openedStream, this._datepicker.closedStream)
      : of();

    this._stateChanges.unsubscribe();
    this._stateChanges = merge(datepickerDisabled, inputDisabled, datepickerToggled).subscribe(() =>
      this._changeDetectorRef.markForCheck()
    );
  }

  static ngAcceptInputType_disabled: BooleanInput;
}
