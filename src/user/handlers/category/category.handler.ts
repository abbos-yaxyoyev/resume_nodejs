import { CategoryException } from '../../../common/db/models/category/exception';
import { categoryService } from '../../../common/service/category/category.service';
import { CategoryDto, CategoryDtoGroup, CategoryGetDto } from '../../../common/validation/dto/category.dto';
import { validateIt } from '../../../common/validation/validate';

export async function getOneCategoryHandler(request, reply) {
  try {

    const data = await validateIt(request.params, CategoryDto, [CategoryDtoGroup.GET_BY_ID]);

    const category = await categoryService.getCategoryFull(data._id);

    return reply.success(category);

  } catch (e) {
    if (e instanceof CategoryException) {
      throw e;
    } else {
      throw CategoryException.UnknownError(e);
    }
  }

}

export async function getPagingCategoryHandler(request, reply) {
  try {

    const data = await validateIt(request.query, CategoryGetDto, [CategoryDtoGroup.PAGENATION]);

    const categorys = await categoryService.getPaging(data);

    return reply.success(categorys);

  } catch (e) {
    if (e instanceof CategoryException) {
      throw e;
    } else {
      throw CategoryException.UnknownError(e);
    }
  }
}


