import { DomainPrimitive, ValueObject, } from '@libs/ddd/domain/base-classes/value-object.base';
import { ArgumentInvalidException } from '@exceptions';

export class ImageUrl extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
    this.props.value = ImageUrl.format(value);
  }

  get value(): string {
    return this.props.value;
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (!ImageUrl.isUrlValid(value)) {
      throw new ArgumentInvalidException('Should be a valid URL');
    }
  }

  private static isUrlValid(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch (e) {
      return false;
    }
  }

  static format(image_url: string): string {
    return image_url.trim().toLowerCase();
  }
}
